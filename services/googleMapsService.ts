// Fix: Add a global declaration for the 'google' object provided by the Google Maps script.
declare const google: any;

let mapsApiLoaded: Promise<void> | null = null;

const loadGoogleMapsScript = (): Promise<void> => {
    if (mapsApiLoaded) {
        return mapsApiLoaded;
    }

    mapsApiLoaded = new Promise((resolve, reject) => {
        if (typeof google !== 'undefined' && google.maps) {
            resolve();
            return;
        }

        const apiKey = process.env.GOOGLE_MAPS_API_KEY;
        if (!apiKey) {
            console.error("Google Maps API key is not configured.");
            // User-friendly error for missing configuration.
            reject(new Error("Không thể xác thực với dịch vụ bản đồ do cấu hình bị thiếu"));
            return;
        }

        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=geocoding`;
        script.async = true;
        script.defer = true;
        
        script.onload = () => resolve();
        script.onerror = () => {
            console.error("Failed to load Google Maps script.");
            // User-friendly error for script loading failure.
            reject(new Error("Không thể kết nối với dịch vụ bản đồ. Vui lòng kiểm tra kết nối mạng"));
            mapsApiLoaded = null;
        };
        
        document.head.appendChild(script);
    });
    
    return mapsApiLoaded;
};

export const getProvinceFromCoordinates = async (latitude: number, longitude: number): Promise<string> => {
    try {
        await loadGoogleMapsScript();
        const geocoder = new google.maps.Geocoder();
        const latlng = { lat: latitude, lng: longitude };

        const { results } = await geocoder.geocode({ location: latlng });

        if (results && results[0]) {
            for (const component of results[0].address_components) {
                if (component.types.includes('administrative_area_level_1')) {
                    if (component.long_name.includes("Ho Chi Minh")) {
                        return "TP. Hồ Chí Minh";
                    }
                    return component.long_name;
                }
            }
            // User-friendly error if province can't be found in results.
            throw new Error("Không thể xác định tỉnh/thành phố từ kết quả định vị");
        } else {
             // User-friendly error for no results.
            throw new Error("Không tìm thấy kết quả cho tọa độ của bạn");
        }
    } catch (error) {
        console.error("Error during geocoding:", error);
        // Re-throw the already user-friendly error from above, or provide a generic fallback.
        if (error instanceof Error) {
            throw error;
        }
        throw new Error("Đã xảy ra lỗi không mong muốn trong quá trình xác định vị trí");
    }
};