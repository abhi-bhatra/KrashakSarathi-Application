export const Features = (props) => {
  return (
    <div id='features' className='text-center'>

      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'>
          <h2>Features</h2>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
              <div key={`${d.title}-${i}`} className='col-xs-6 col-md-3'>
                <div class="portfolio-item mx-auto" data-toggle="modal" data-target={`#${d.loc}`}>
                  {' '}
                  <div className="portfolio-item-caption-content text-center text-white"><i className={d.icon}></i></div>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              </div>
            ))
            : 'Loading...'}
        </div>

        {/* Soil */}
        <div className="portfolio-modal modal fade" id="soil" tabindex="-1" role="dialog" aria-labelledby="portfolioModal1Label" aria-hidden="true">
          <div className="modal-dialog modal-xl" role="document">
            <div className="modal-content">
              <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true"><i class="material-icons">close</i></span>
              </button>
              <div className="modal-body text-center">
                <div className="container-float">
                  <div className="row justify-content-center">

                    <div className="col-md-10 col-md-offset-1">
                      <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0" id="portfolioModal1Label">Soil</h2>
                      <div className="divider-custom">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><i class="material-icons">star</i></div>
                        <div className="divider-custom-line"></div>
                      </div>
                      {/* <p className="mb-5"><iframe src='https://webchat.botframework.com/embed/edubotqna-bot?s=XaExDKxVr1I.0bObBjWc344ts2noUmTzyw-V_whYAqsmRxH4XpZJa7E'  styles='width: 100%; min-height: 300px;'></iframe></p> */}
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Weather */}
        <div className="portfolio-modal modal fade" id="weather" tabindex="-1" role="dialog" aria-labelledby="portfolioModal1Label" aria-hidden="true">
          <div className="modal-dialog modal-xl" role="document">
            <div className="modal-content">
              <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true"><i class="material-icons">close</i></span>
              </button>
              <div className="modal-body text-center">
                <div className="container-float">
                  <div className="row justify-content-center">

                    <div className="col-md-10 col-md-offset-1">
                      <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0" id="portfolioModal1Label">Weather</h2>
                      <div className="divider-custom">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><i class="material-icons">star</i></div>
                        <div className="divider-custom-line"></div>
                      </div>
                      {/* <p className="mb-5"><iframe src='https://webchat.botframework.com/embed/edubotqna-bot?s=XaExDKxVr1I.0bObBjWc344ts2noUmTzyw-V_whYAqsmRxH4XpZJa7E'  styles='width: 100%; min-height: 300px;'></iframe></p> */}
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Price */}
        <div className="portfolio-modal modal fade" id="price" tabindex="-1" role="dialog" aria-labelledby="portfolioModal1Label" aria-hidden="true">
          <div className="modal-dialog modal-xl" role="document">
            <div className="modal-content">
              <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true"><i class="material-icons">close</i></span>
              </button>
              <div className="modal-body text-center">
                <div className="container-float">
                  <div className="row justify-content-center">

                    <div className="col-md-10 col-md-offset-1">
                      <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0" id="portfolioModal1Label">Price</h2>
                      <div className="divider-custom">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><i class="material-icons">star</i></div>
                        <div className="divider-custom-line"></div>
                      </div>
                      {/* <p className="mb-5"><iframe src='https://webchat.botframework.com/embed/edubotqna-bot?s=XaExDKxVr1I.0bObBjWc344ts2noUmTzyw-V_whYAqsmRxH4XpZJa7E'  styles='width: 100%; min-height: 300px;'></iframe></p> */}
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Crop Pricing Calci */}
        <div className="portfolio-modal modal fade" id="cropcalculator" tabindex="-1" role="dialog" aria-labelledby="portfolioModal1Label" aria-hidden="true">
          <div className="modal-dialog modal-xl" role="document">
            <div className="modal-content">
              <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true"><i class="material-icons">close</i></span>
              </button>
              <div className="modal-body text-center">
                <div className="container-float">
                  <div className="row justify-content-center">

                    <div className="col-md-10 col-md-offset-1">
                      <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0" id="portfolioModal1Label">Crop Calculator</h2>
                      <div className="divider-custom">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><i class="material-icons">star</i></div>
                        <div className="divider-custom-line"></div>
                      </div>
                      {/* <p className="mb-5"><iframe src='https://webchat.botframework.com/embed/edubotqna-bot?s=XaExDKxVr1I.0bObBjWc344ts2noUmTzyw-V_whYAqsmRxH4XpZJa7E'  styles='width: 100%; min-height: 300px;'></iframe></p> */}
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}
