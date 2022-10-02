import React from "react";
import './main.css'
import GunCard from '../gunCard/gun-card';
import Headline from '../headline/headline';
import glock from '../../assets/images/guns/glock.png';
import mp5 from '../../assets/images/guns/mp5.png';
import mp7 from '../../assets/images/guns/mp7.png';
import famas from '../../assets/images/guns/famas.png';
import m16 from '../../assets/images/guns/m16.png';
import ak47 from '../../assets/images/guns/ak47.png';
import aa12 from '../../assets/images/guns/aa12.png';
import mk14 from '../../assets/images/guns/mk14.png';
import m60e4 from '../../assets/images/guns/m60e4.png';
import { ReactComponent as Comment } from '../../assets/svgs/comment.svg';
import SoftwareCard from '../softwareCard/software-card';
import Blender from '../../assets/images/interface/blender.png';
import Unity from '../../assets/images/interface/unity.png';

const Main = () => {
  return (
    <div className='main'>
      <div className='main-overview'>
        <Headline text={'Overview'}/>
        <div className='overview-description'>
          <table className='pack-offers'>
            <tr>
              <td className='table-field'>Guns</td>
              <td className='table-value'>22</td>
            </tr>
            <tr>
              <td className='table-field'>Attachments</td>
              <td className='table-value'>11</td>
            </tr>
            <tr>
              <td className='table-field'>Grenades</td>
              <td className='table-value'>3</td>
            </tr>
            <tr>
              <td className='table-field'>Claymores</td>
              <td className='table-value'>3</td>
            </tr>
            <tr>
              <td className='table-field'>Custom Guns *</td>
              <td className='table-value'>8</td>
            </tr>
          </table>
          <p className='pack-offers-comment'>* Standart models with already mounted attachments</p>
        </div>
      </div>
      <div className='guns-gallery'>
        <Headline text={'Gallery'}/>
        <div className='gallery-grid'>
          <GunCard gunName='Glock' gunImage={glock}/>
          <GunCard gunName='MP-5' gunImage={mp5}/>
          <GunCard gunName='MP-7' gunImage={mp7}/>
          <GunCard gunName='Famas-F1' gunImage={famas}/>
          <GunCard gunName='M16A3' gunImage={m16}/>
          <GunCard gunName='AK-47' gunImage={ak47}/>
          <GunCard gunName='AA-12' gunImage={aa12}/>
          <GunCard gunName='MK-14' gunImage={mk14}/>
          <GunCard gunName='M60E4' gunImage={m60e4}/>
        </div>
        <div className='guns-warning'>
          <Comment className='warning-icon'/>
          <p className='warning-text'>The gallery does not show the whole collection — I am just too lazy to render all of the items</p>
        </div>
      </div>
      <div className='story'>
        <Headline text='The Story'/>
        <div className='software'>
          <SoftwareCard icon={Unity} name='Unity' summary='A game engine I use to develop games and for which this gun-pack has been originally made for'></SoftwareCard>
          <SoftwareCard icon={Blender} name='Blender' summary='A 3D modeling app where I have created and rendered all the models'></SoftwareCard>
        </div>
      </div>
      
    </div>
  )
}

export default Main;