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
                  <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal1">
                    {' '}
                    <div className="portfolio-item-caption-content text-center text-white"><i className={d.icon}></i></div>
                    <h3>{d.title}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
          ))
          : 'Loading...'}
        </div>

        {props.data
            ? props.data.map((d, i) => (        
        <div key={`${d.title}-${i}`} className="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog" aria-labelledby="portfolioModal1Label" aria-hidden="true">
            <div key={`${d.title}-${i}`} className="modal-dialog modal-xl" role="document">
                <div key={`${d.title}-${i}`} className="modal-content">
                    <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true"><i class="material-icons">close</i></span>
                    </button>
                    <div key={`${d.title}-${i}`} className="modal-body text-center">
                        <div key={`${d.title}-${i}`} className="container-float">
                            <div key={`${d.title}-${i}`} className="row justify-content-center">
                            
                                  <div className="col-md-10 col-md-offset-1">
                                    <h2 key={`${d.title}-${i}`} className="portfolio-modal-title text-secondary text-uppercase mb-0" id="portfolioModal1Label">{d.title}</h2>
                                    <div key={`${d.title}-${i}`} className="divider-custom">
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
        ))
        : 'Loading...'}
      </div>
    </div>
  )
}
