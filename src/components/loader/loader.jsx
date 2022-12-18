import React from 'react'
import './loader.js'
import './loader.css'

const loader = () => {
  return (
    <div id="loader">
      <div id="tridiv">
        <div class="scene">
          <div class="shape cuboid-1 cub-1">
            <div class="face ft">
              <div
                class="photon-shader"
                style="
                  background-color: rgba(255, 255, 255, 0.0705882);
                  align-items: center;
                  color: white;
                "
              >
                Tetra
              </div>
            </div>
            <div class="face bk">
              <div
                class="photon-shader"
                style="background-color: rgba(255, 255, 255, 0.0705882)"
              ></div>
            </div>
            <div class="face rt">
              <div
                class="photon-shader"
                style="background-color: rgba(255, 255, 255, 0.0705882)"
              ></div>
            </div>
            <div class="face lt">
              <div
                class="photon-shader"
                style="background-color: rgba(255, 255, 255, 0.0705882)"
              ></div>
            </div>
            <div class="face bm">
              <div
                class="photon-shader"
                style="background-color: rgba(255, 255, 255, 0.0705882)"
              ></div>
            </div>
            <div class="face tp">
              <div
                class="photon-shader"
                style="background-color: rgba(255, 255, 255, 0.0705882)"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default loader