          <div id="map" className="map"></div>

          <nav>
          <div>
            <h2>ShenZhen Locations</h2>
            <div id ="searchBox">
              <input 
                type="text" 
                placeholder="Station location"/>
              <button className="filter">Filter</button>
            </div>
          </div>
        </nav>
        <div className="main">        
          <div id="menu">
            <button className="navbar-toggle" type="button" data-toggle="collapse" data-target=".bs-navbar-collapse">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>
          <div id="map" className="map">
            <Map google={this.props.google} zoom={14} style={style}></Map>
          </div>
        </div>
