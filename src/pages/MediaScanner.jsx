export default function MediaScanner() {
  return (
    <div className="media-screen">
      <div className="room-bg">
        <div className="tv-frame">
          <div className="tv-content">
            <img
              src="https://i.pravatar.cc/300?img=5"
              alt="TV Content"
              className="tv-face"
            />
          </div>
        </div>

        <div className="ar-overlay">
          <div className="ar-circle"></div>

          <div className="ar-label top-left">
            Reference to <strong>Friends TV?</strong>
          </div>

          <div className="ar-label bottom-left">
            Just watched <strong>Friends S1E1</strong> on Netflix
          </div>

          <div className="ar-label bottom-right">
            Search for <strong>Friends TV</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
