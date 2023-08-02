import "./features.css";

export default function Features() {
  return (
    <>
      <div id="features" className="features">
        <div className="container">
          <h2 className="features-heading">
            What makes Aniwatch.to the best website
          </h2>
          <div className="features-flex">
            <div className="col-1">
              <div className="feature-box">
                <h3 className="feature-box-heading">
                  1. Quality and Resolution
                </h3>
                <p className="feature-box-para">
                  Aniwatch offers different resolutions, from standard to
                  ultra-hd. Moreover, it has an ad free service to let you enjoy
                  your shows without interruption.
                </p>
              </div>
              <div className="feature-box">
                <h3 className="feature-box-heading">2. Content Library</h3>
                <p className="feature-box-para">
                  AniWatch offers huge library of anime shows for free. Here you
                  will discover popular, classic, romance, action and
                  contemporary titles from many genre.
                </p>
              </div>
              <div className="feature-box">
                <h3 className="feature-box-heading">3. Batch Download</h3>
                <p className="feature-box-para">
                  You can download multiple episodes simultaneously with the
                  help of KeepStreams to save time. All you need to do is add
                  your title to the queue.
                </p>
              </div>
            </div>
            <div className="col-2">
              <div className="feature-box">
                <h3 className="feature-box-heading">4. Safety and Security</h3>
                <p className="feature-box-para">
                  We try our best to not having harmful ads on Aniwatch. No data
                  is collected from the user. You should rest assured that you
                  are protected.
                </p>
              </div>
              <div className="feature-box">
                <h3 className="feature-box-heading">
                  5. Device Compatiability
                </h3>
                <p className="feature-box-para">
                  AniWatch works alright on both your mobile and desktop.
                  However, we'd recommend you use your desktop for a smoother
                  streaming experience.
                </p>
              </div>
              <div className="feature-box">
                <h3 className="feature-box-heading">5. UI and UX</h3>
                <p className="feature-box-para">
                  Our User Interface and User experience makes it easy for
                  anyone, no matter how old you are, how long have you been on
                  the Internet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
