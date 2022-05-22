
import './productForm.css'

import PatternLock from './patternLock/PatternLock';
import { useEffect, useRef, useState, useContext } from 'react';
import SignaturePad from "./signaturePad/src/index";
import QRCode from "react-qr-code";
import AppContext from '../../../contexts/AppContext';

import TextField from '@mui/material/TextField';
import AdapterJalali from '@date-io/date-fns-jalali';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useTranslation } from 'react-i18next';

var base64 = require('base-64');



const ProductForm = () => {
  const {t} = useTranslation();
  
  const [patternLock, setpatternLock] = useState(false);
  const [patternLockSize, setPatternLockSize] = useState("0");
  const [value, setValue] = useState(new Date());
  const [warrantyDateBeg, setWarrantyDateBeg] = useState(new Date());
  const [warrantyDateEnd, setWarrantyDateEnd] = useState(new Date());
  const [firstImg, setFirstImg] = useState();
  const [secondImg, setSecondImg] = useState();
  const [todayDate, setTodayDate] = useState('');
  const [todayTime, setTodayTime] = useState('');
  const currentLang = useContext(AppContext);

  let sigPad = useRef({});

  const signaturePadClicked = () => {
    console.log(sigPad.current.toDataURL());
    var encodedData = base64.encode(sigPad.current.toDataURL());
    console.log(encodedData);
    // var decodedData = base64.decode(encodedData);
    // console.log(decodedData);
    // console.log(sigPad.current.fromDataURL(sigPad.current.toDataURL()));
  }


  const onImageChange = (e) => {
    const [file] = e.target.files;
    console.log(file)
    // setFirstImg(URL.createObjectURL(file));
    setFirstImg(file);
    // console.log(URL.createObjectURL(file))
    
  };

  useEffect(()=>{
    let today = new Date().toLocaleDateString(currentLang.app.lang === 'fa' ?'fa-IR' : 'en-US');
    setTodayDate(today)
    let todayTime = new Date().toLocaleTimeString(currentLang.app.lang === 'fa' ?'fa-IR' : 'en-US');
    setTodayTime(todayTime);
    
  },[currentLang.app.lang])
  


  return (
    <div className="mainProductForm ">
      <div className="rightForm">
          <div className="DateAdnTime1">
            {/* <label htmlFor="DateTime" className='DateTimeLabel'>تاریخ و ساعت:</label> */}
            {/* <input type="datetime-local" name="" id="DateTime"  /> */}

            {/* <LocalizationProvider dateAdapter={AdapterJalali}>
                <DatePicker
                  mask="____/__/__"
                  value={value}
                  onChange={(newValue) => {setValue(newValue); console.log(newValue)}}
                  renderInput={(params) => <TextField  {...params} />}
                />
             </LocalizationProvider> */}
             <div className="timeanddate">
              <h4>{todayTime}</h4>
              <h3>{todayDate}</h3>
             </div>
            
          </div>
          
            <input type="number" id='recievtionID' placeholder={t("recievtionID")}/>
          
          
            <input type="text" id='nameLastNameINFO' className='personInformation' placeholder={t("nameLastNameINFO")}/>
            <input type="number" id='phoneNumber'  className='personInformation'  placeholder={t("personInformationPhone")}/>
            <input type="text" id='state'  className='personInformation'  placeholder={t("personInformationState")}/>
            <input type="text" id='city'  className='personInformation'  placeholder={t("personInformationCity")}/>
            <textarea type="text" id='address'  className='personInformation'  placeholder={t("personInformationAddress")}/>
            
          <div className="deviceFaildAndPicture">
            <textarea type="text"  id='deviceFailedDescription' placeholder={t("deviceFailedDescription")}/>
            <div className='failedBTNParent'>
            <label htmlFor="firstBtnfile"><i className="fa fa-camera failedBTN" aria-hidden="true"></i></label>
            <input type="file" id='firstBtnfile' accept="image/png, image/gif, image/jpeg" onChange={onImageChange} />
              {/* <button className="failedBTN"><i className="fa fa-camera" aria-hidden="true"></i></button> */}
              <span>{t("addPictureIfUWant")}</span> <span>{firstImg ? firstImg.name : '' }</span>
            </div>
          </div>
          
            
          <input type="text" id='phonePass' className='personInformation' placeholder={t("personInformationPasswordOptional")}/>
        
        
          <input type="text" id='GmailApple' className='personInformation' placeholder='GMAIL/APPLE ID/MI ACCOUNT'/>
        
          
          <div className="pattern">
            <span className="patternspan">{t("nameLastNameINFOpatternspan")}</span>
            <div className='patternDiv'>
              <button className="btnPattern" onClick={() => setpatternLock(!patternLock)}>{t("nameLastNameINFOBtnPattern")}</button>
              <div className="sectionDiv">
              <select className='selectionLock' onChange={(e) => setPatternLockSize(e.target.value)} onClick={()=>setpatternLock(false)}>
                <option value="0">3*3</option>
                <option value="1">4*3</option>
                <option value="2">4*4</option>
                <option value="3">5*4</option>
                <option value="4">5*5</option>
              </select>
              </div>
              
            </div>
            
          </div>
          <div className='patternLock' style={{display: patternLock ? 'block' : 'none'}}><PatternLock  size={patternLockSize} setpatternLock = {setpatternLock} /></div>
          
          
          <select className="selectSendType" style={{display: !patternLock ? 'block' : 'none'}}>
            <option value="0">{t("nameLastNameINFOselectSendTypePOST")}</option>
            <option value="1">{t("nameLastNameINFOselectSendTypePOST1")}</option>
            <option value="2">{t("nameLastNameINFOselectSendTypePOST2")}</option>
            <option value="3">{t("nameLastNameINFOselectSendTypePOST3")}</option>
            <option value="4">{t("nameLastNameINFOselectSendTypePOST4")}</option>
            <option value="5">{t("nameLastNameINFOselectSendTypePOST5")}</option>
            <option value="6">{t("nameLastNameINFOselectSendTypePOST6")}</option>
          </select>

          <div className="DateAdnTime" style={{display: !patternLock ? 'flex' : 'none'}}>
            <label htmlFor="DateTime" className='DateTimeLabel'>{t("nameLastNameINFODateTimeLabel")}</label>
            {/* <input type="datetime-local" name="" id="DateTime"  /> */}

            <LocalizationProvider dateAdapter={AdapterJalali}>
                <DatePicker
                  mask="____/__/__"
                  value={warrantyDateBeg}
                  onChange={(newValue) => {setWarrantyDateBeg(newValue); console.log(newValue)}}
                  renderInput={(params) => <TextField {...params} />}
                />
             </LocalizationProvider>

            
          </div>
          
          <div className="DateAdnTime" style={{display: !patternLock ? 'flex' : 'none'}}>
            <label htmlFor="DateTime" className='DateTimeLabel'>{t("nameLastNameINFODateTimeLabelBegin")}</label>
            {/* <input type="datetime-local" name="" id="DateTime"  /> */}

            <LocalizationProvider dateAdapter={AdapterJalali}>
                <DatePicker
                  mask="____/__/__"
                  value={warrantyDateEnd}
                  onChange={(newValue) => setWarrantyDateEnd(newValue)}
                  renderInput={(params) => <TextField {...params} />}
                />
             </LocalizationProvider>
          </div>
        
          

      </div>
      <div className="middleForm">
        
          <select className="selectwaranty">
            <option value="0">{t("nameLastNameINFOSelectwaranty1")}</option>
            <option value="1">{t("nameLastNameINFOSelectwaranty2")}</option>
            <option value="2">{t("nameLastNameINFOSelectwaranty3")}</option>
          </select>
        
         

        
          <select className="selectwaranty">
            <option value="0">{t("nameLastNameINFOselectwarantyJOB")}</option>
            <option value="1">{t("nameLastNameINFOselectwarantyJOB1")}</option>
            <option value="2">{t("nameLastNameINFOselectwarantyJOB2")}</option>
            <option value="3">{t("nameLastNameINFOselectwarantyJOB3")}</option>
            <option value="4">{t("nameLastNameINFOselectwarantyJOB4")}</option>
          </select>
        
        
          
          <input type="text" className="deviceSerial" placeholder={t("deviceSerial")} />
       
        
          <input type="text" className="deviceSerial" placeholder={t("deviceMark")}/>
     
     
          <input type="text" className="deviceSerial" placeholder={t("deviceType")}/>
       
          <input type="text" className="deviceSerial" placeholder={t("deviceModel")} />
      
          <input type="text" className="deviceSerial" placeholder={t("internalRam")} />
       
          <input type="text" className="deviceSerial" placeholder={t("deviceColor")} />
        
          <input type="text" className="deviceSerial" placeholder={t("deviceCreator")}/>
       
        
          <select className="selectwaranty" >
            <option value="0">لوازم همراه:</option>
            <option value="1">بدون سابقه</option>
            <option value="2">برگشتی عادی</option>
            <option value="3">برگشتی ویژه</option>
            <option value="4">VIP</option>
          </select>
        
        <div className="deviceFaildAndPicture" style={{marginTop:5}}>
          <textarea type="text"  id='deviceFailedDescription' placeholder={t("deviceFailedDescriptionFanni")}/>
          <div className='failedBTNParent'>
          <label htmlFor="secondBtnfile"><i className="fa fa-camera failedBTN" aria-hidden="true"></i></label>
            <input type="file" id='secondBtnfile' accept="image/png, image/gif, image/jpeg"/>
            {/* <button className="failedBTN" onClick={signaturePadClicked}><i className="fa fa-camera" aria-hidden="true"></i></button> */}
            <span>{t("fanniAddPic")}</span>
          </div>
        </div>

        <div className="signaturepadDiv">
          <SignaturePad clearButton="true" ref={sigPad}  textTitle={t("fanniSignature")} />
        </div>
      </div>
      <div className="leftForm">
        <div className="LOGO">
          <img src="" alt="" />
        </div>

        <div className="qrCodeDiv">
        <QRCode value='hey'/>
        </div>

        
        <textarea type="text"  id='deviceFailedDescription' className="warrantyExp" placeholder={t("warantyExpDesc")}/>
        
        
        <textarea type="text"  id='deviceFailedDescription' className="fanni" placeholder={t("fanniDesc")}/>
        
        <div className="signaturepadDiv1">
          <SignaturePad clearButton="true"  textTitle={t("clientSignature")}/>
        </div>
      </div>
    </div>
  )
}

export default ProductForm