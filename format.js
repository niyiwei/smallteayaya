const Validate = {
    /**
     * phone valid
     */
    mobileCheck: (value) => /^[1][3,4,5,7,8][0-9]{9}$/.test(value),
  
    /**
     * idcard valid
     */
    IDCardCheck: (value) =>
      /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/.test(
        value
      ),
  
    /**
     * email valid
     */
    emailCheck: (value) =>
      /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(value),

    /**
     * password valid
     * 6-16 number and letter
     * */
    passwordCheck: (value) => /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/.test(value),
  };
  
  export default Validate;