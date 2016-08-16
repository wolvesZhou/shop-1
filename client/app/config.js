/**
 * Created by clf on 2016/8/6.
 */

const apiRoot='/api/'

const config={
    //api地址
    apiUrl:{
        geoCoder:'http://api.map.baidu.com/geocoder/v2/',
        getVerifyCode:apiRoot+'getVerifyCode',
        login:apiRoot+'login',//登陆
        region:apiRoot+'region',//获取城市下面的地区
        getQnToken:apiRoot+'getQnToken',//获取七牛token
        getLocationInfo:apiRoot+'getLocationInfo',//获取地址
        products:apiRoot+'products',//新增产品
        districts:apiRoot+'districts',//获取所在城市下面的区列表
    },

    //百度key
    baiduKey:'u4doiw4efjtMPKYVPTeiTbFh',

    //价格区间,区间以~相隔
    priceList:['不限','0~1000','1000~2000','2000~3000','3000~4000'],

    //品种列表
    categoryList:['不限','苹果','小米','魅族','华为']
};


module.exports=config;