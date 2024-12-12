import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useLoading } from "../context/GlobalProvider";

export default function LoadingOverlay() {
    const { isLoading } = useLoading();

    if (!isLoading) return null;

    return (
        <div className="loading-overlay">
            <div className="spinner-border text-success"  role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <p>Loading ...</p>
        </div>
    );

}
