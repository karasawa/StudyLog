export default function useDateValidation(date: string) {
  const monthList = ["01","02","03","04","05","06",
                     "07","08","09","10","11","12",]
  
  const dayObj: {[key: string]: number} = {
    "01": 31,
    "02": 29,
    "03": 31,
    "04": 30,
    "05": 31,
    "06": 30,
    "07": 31,
    "08": 31,
    "09": 30,
    "10": 31,
    "11": 30,
    "12": 31
  }
  
  const dateValidation = () => {
    let errFlag = false

    //文字数チェック
    if(date.length !== 10){
      errFlag = true
      return errFlag
    }

    //区切り文字チェック
    let index = date.indexOf("-")
    if(index !== 4){
      errFlag = true
      return errFlag
    }
    index = date.indexOf("-", index + 1)
    if(index !== 7){
      errFlag = true
      return errFlag
    }
    index = date.indexOf("-", index + 1)
    if(index !== -1){
      errFlag = true
      return errFlag
    }

    //年の妥当性チェック
    const year = Number(date.slice(0,4))
    if(isNaN(year)){
      errFlag = true
      return errFlag
    }

    //月の妥当性チェック
    const month = date.slice(5,7)
    errFlag = !monthList.includes(month)
    if(errFlag)return errFlag

    //日の妥当性チェック
    const day = date.slice(8,10)
    if(isNaN(Number(day))){
      errFlag = true
      return errFlag
    }
    if(Number(day) < 1 || Number(day) > dayObj[month]){
      errFlag = true
      return errFlag
    }

    return errFlag
  }
  return { dateValidation }
}
