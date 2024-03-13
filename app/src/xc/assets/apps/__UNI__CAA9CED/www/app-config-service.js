
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/welcome","pages/index/index","pages/home/home","pages/home/message","pages/home/my-application/index","pages/home/check-company","pages/home/check-authority","pages/home/my","pages/home/tutorial","pages/index/guide","pages/index/login","pages/index/autologin","pages/home/app_h5","pages/common/map/map","pages/application/hidden-danger/index","pages/application/hidden-danger/report","pages/application/hidden-danger/detail","pages/application/hidden-danger/edit","pages/application/hidden-danger/from-map","pages/application/hidden-danger/hidden-type","pages/application/hidden-danger/self-define","pages/application/hidden-dangerV2/index","pages/application/hidden-dangerV2/detail","pages/application/hidden-dangerV2/from-map","pages/application/hidden-dangerV2/hidden-type","pages/application/hidden-dangerV2/hidden-level","pages/application/hidden-dangerV2/company_list","pages/application/hidden-dangerV2/addressBook","pages/application/hidden-dangerV2/self-define","pages/application/notice/notice-list","pages/application/notice/notice-detail","pages/application/notice/notice-respond","pages/application/notice/notice-publish","pages/application/notice/message-publish","pages/application/notice/notice-sended","pages/application/notice/custom-select-dept","pages/application/notice/custom-select-dept-cared","pages/application/notice/custom-select-company","pages/application/notice/custom-select-person","pages/application/patrol-report/index","pages/application/sys-app/Automatic-water-spraying/home","pages/application/sys-app/Automatic-water-spraying/detail","pages/application/sys-app/Automatic-water-spraying/more","pages/application/sys-app/Electrical-fire/home","pages/application/sys-app/Electrical-fire/detail","pages/application/sys-app/Electrical-fire/part-info","pages/application/sys-app/Electrical-fire/searchmore","pages/application/sys-app/Indoor-fire-hydrant/home","pages/application/sys-app/Indoor-fire-hydrant/detail","pages/application/sys-app/Indoor-fire-hydrant/more","pages/application/sys-app/Outdoor-fire-hydrant/home","pages/application/sys-app/Outdoor-fire-hydrant/hydrant-detail","pages/application/sys-app/Outdoor-fire-hydrant/choose-device","pages/application/sys-app/Outdoor-fire-hydrant/bind-smart-cover","pages/application/sys-app/Outdoor-fire-hydrant/bind-device2","pages/application/sys-app/Outdoor-fire-hydrant/bind-device3","pages/application/sys-app/Outdoor-fire-hydrant/edit-base-info","pages/application/sys-app/Outdoor-fire-hydrant/edit-stuffy","pages/application/sys-app/Outdoor-fire-hydrant/device-introduce","pages/application/sys-app/Outdoor-fire-hydrant/edit-pressure","pages/application/sys-app/Outdoor-fire-hydrant/edit-unify","pages/application/sys-app/Automatic-fire-alarm/home","pages/application/sys-app/Automatic-fire-alarm/detail","pages/application/sys-app/Automatic-fire-alarm/searchmore","pages/home/my-application/search","pages/home/my-application/detail","pages/home/my-application/edit","pages/home/my-application/center","pages/application/digital-plan/add","pages/application/digital-plan/home","pages/application/digital-plan/company_list","pages/application/digital-plan/plan_list","pages/application/digital-plan/detail","pages/application/digital-plan/edit","pages/home/check-company/unitInformation","pages/home/check-company/buildingInformation","pages/home/check-company/buildingDetail","pages/home/check-company/more","pages/home/check-authority/company-info","pages/home/check-authority/iot-device","pages/home/check-authority/notice-post","pages/home/check-authority/system-info","pages/home/check-authority/risk-assessment","pages/home/check-authority/history-score","pages/home/check-authority/risk-assessing","pages/home/check-authority/assessing-result","pages/home/check-authority/building-list","pages/home/check-authority/building-detail","pages/home/check-authority/building-image","pages/common/message/alarm","pages/common/message/fault","pages/common/message/operation","pages/common/message/abnormal","pages/common/message/maint","pages/common/message/patrol","pages/common/message/notice","pages/common/message/systemUpdate","pages/common/alarm/alarm","pages/common/alarmDevice/alarmDevice","pages/common/alarmDevice/alarmDeviceEvent","pages/common/company/company","pages/common/company/info","pages/common/building/building","pages/common/deviceDistribution/deviceDistribution","pages/common/building/info","pages/common/floor/floor","pages/common/area/area","pages/common/area/info","pages/common/device/device","pages/common/allDevice/allDevice","pages/common/device/info","pages/common/maintenance/repair/repairTask/repairTask","pages/common/maintenance/repair/repairTask/repairTaskOption","pages/common/maintenance/repair/repairTask/repairTaskDetails","pages/common/maintenance/repair/repairTaskAdd/repairTaskAdd","pages/common/maintenance/repair/repairTaskAdd/addressBook","pages/common/maintenance/repair/repairTask/repairBack","pages/common/maintenance/repair/repairReport/repairReport","pages/common/maintenance/maintain/maintainTask/maintainTask","pages/common/maintenance/maintain/maintainTask/maintainTaskOption","pages/common/maintenance/maintain/maintainTask/maintainTaskOptionV2","pages/common/maintenance/maintain/maintainTask/maintainTaskDetails","pages/common/maintenance/maintain/maintainTask/maintainTaskDetailsV2","pages/common/maintenance/maintain/maintainTask/maintainTaskTerms","pages/common/maintenance/maintain/maintainTask/maintainTaskEdit","pages/common/maintenance/maintain/maintainReport/maintainReport","pages/common/maintenance/testing/testingTask/testingTask","pages/common/maintenance/testing/testingReport/testingReport","pages/common/maintenance/patrol/patrolTask/patrolTask","pages/common/maintenance/patrol/patrolTask/patrolTaskOption","pages/common/maintenance/patrol/patrolTask/patrolTaskSite","pages/common/webViewPage/webViewPage","pages/common/eventInfo/eventInfo","pages/common/flv/flv","pages/common/video/video","pages/common/video/info","pages/common/setting/setting","pages/common/about/about","pages/common/about/updateLog","pages/common/about/updateLogDesc","pages/common/helpFeedback/helpFeedback","pages/common/helpFeedback/helpDesc","pages/common/helpFeedback/feedback","pages/common/user/user","pages/common/user/switchAccount","pages/common/updatePwd/updatePwd","pages/common/monitoringSystem/systemListDefault","pages/common/monitoringSystem/systemDevice","pages/common/appExtension/appExtension","pages/common/companySwitch/companySearch","pages/common/addressBook/addressBook","pages/common/personSign/personSign","pages/common/electricalFacilities/electricalFacilities","pages/common/electricalFacilities/allScene","pages/common/electricalFacilities/sceneInfo","pages/common/electricalFacilities/deviceInfo","pages/common/electricalFacilities/locationInfo","pages/common/device/sense_info","pages/common/helmet/helmet","pages/common/helmet/info","pages/common/helmet/event/event_history","pages/application/deluge-system/list","pages/application/deluge-system/detail","pages/application/deluge-system/app_web3d","pages/common/deviceDistribution/three-building","pages/application/deluge-system/device-list","pages/application/deluge-system/notice"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"享成科技","navigationBarBackgroundColor":"white","backgroundColor":"white","backgroundColorTop":"white","backgroundColorBottom":"white","scrollIndicator":"none"},"tabBar":{"color":"#a5abb3","selectedColor":"#3DA5F1","borderStyle":"black","backgroundColor":"#fff","list":[{"pagePath":"pages/home/home","iconPath":"static/tabBar/home.png","selectedIconPath":"static/tabBar/home-fill.png","text":"首页"},{"pagePath":"pages/home/message","iconPath":"static/tabBar/message.png","selectedIconPath":"static/tabBar/message-fill.png","text":"消息"},{"pagePath":"pages/home/my-application/index","iconPath":"static/tabBar/application.png","selectedIconPath":"static/tabBar/application-fill.png","text":"应用"},{"pagePath":"pages/home/check-company","iconPath":"static/tabBar/check.png","selectedIconPath":"static/tabBar/check-fill.png","text":"查看"},{"pagePath":"pages/home/my","iconPath":"static/tabBar/my.png","selectedIconPath":"static/tabBar/my-fill.png","text":"我的"}]},"networkTimeout":{"request":180000,"connectSocket":60000,"uploadFile":180000,"downloadFile":180000},"darkmode":false,"nvueCompiler":"uni-app","nvueStyleCompiler":"weex","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"享安全","compilerVersion":"3.96","entryPagePath":"pages/index/welcome"};
var __uniRoutes = [{"path":"/pages/index/welcome","meta":{"isQuit":true},"window":{"navigationStyle":"custom","navigationBarTextStyle":"black","navigationBarTitleText":"启动页","enablePullDownRefresh":false}},{"path":"/pages/index/index","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"black","navigationBarTitleText":"启动页","enablePullDownRefresh":false}},{"path":"/pages/home/home","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationStyle":"custom","navigationBarTitleText":"首页","navigationBarTextStyle":"black","bounce":"none","pullToRefresh":{"support":true,"color":"#3DA5F1","style":"circle"}}},{"path":"/pages/home/message","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationStyle":"custom","navigationBarTextStyle":"black","navigationBarTitleText":"通知","bounce":"none","pullToRefresh":{"support":true,"color":"#3DA5F1","style":"circle"}}},{"path":"/pages/home/my-application/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationStyle":"custom","navigationBarTextStyle":"black","navigationBarTitleText":"应用","enablePullDownRefresh":false,"bounce":"none"}},{"path":"/pages/home/check-company","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationStyle":"custom","navigationBarTextStyle":"black","navigationBarTitleText":"查看","enablePullDownRefresh":true,"bounce":"none"}},{"path":"/pages/home/check-authority","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"black","navigationBarTitleText":"查看","enablePullDownRefresh":false,"bounce":"none"}},{"path":"/pages/home/my","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationStyle":"custom","navigationBarTextStyle":"black","navigationBarTitleText":"我的","enablePullDownRefresh":false,"bounce":"none"}},{"path":"/pages/home/tutorial","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"black","navigationBarTitleText":"使用教程","enablePullDownRefresh":false}},{"path":"/pages/index/guide","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"black","navigationBarTitleText":"引导页","enablePullDownRefresh":false}},{"path":"/pages/index/login","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"black","navigationBarTitleText":"登录","enablePullDownRefresh":false,"bounce":"none"}},{"path":"/pages/index/autologin","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"black","navigationBarTitleText":"自动登录","bounce":"none"}},{"path":"/pages/home/app_h5","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"black","navigationBarTitleText":"监测应用","enablePullDownRefresh":false,"bounce":"none","pullToRefresh":{"support":true,"color":"#3DA5F1","style":"circle"}}},{"path":"/pages/common/map/map","meta":{},"window":{}},{"path":"/pages/application/hidden-danger/index","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"black","navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/application/hidden-danger/report","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"black","navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/application/hidden-danger/detail","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"black","navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/application/hidden-danger/edit","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"black","navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/application/hidden-danger/from-map","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"black","navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/application/hidden-danger/hidden-type","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"black","navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/application/hidden-danger/self-define","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"black","navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/application/hidden-dangerV2/index","meta":{},"window":{"navigationStyle":"custom","bounce":"none","pullToRefresh":{"support":true,"color":"#3DA5F1","style":"circle"}}},{"path":"/pages/application/hidden-dangerV2/detail","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"black","navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/application/hidden-dangerV2/from-map","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"black","navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/application/hidden-dangerV2/hidden-type","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"black","navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/application/hidden-dangerV2/hidden-level","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"black","navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/application/hidden-dangerV2/company_list","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"black","navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/application/hidden-dangerV2/addressBook","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"black","navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/application/hidden-dangerV2/self-define","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"black","navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/application/notice/notice-list","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"black","navigationBarTitleText":"通知公告","enablePullDownRefresh":true}},{"path":"/pages/application/notice/notice-detail","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"black","navigationBarTitleText":"通知详情","enablePullDownRefresh":false}},{"path":"/pages/application/notice/notice-respond","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"black","navigationBarTitleText":"回复","enablePullDownRefresh":false}},{"path":"/pages/application/notice/notice-publish","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"black","navigationBarTitleText":"发布公告","enablePullDownRefresh":false}},{"path":"/pages/application/notice/message-publish","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"black","navigationBarTitleText":"发布通知","enablePullDownRefresh":false}},{"path":"/pages/application/notice/notice-sended","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"black","navigationBarTitleText":"已发送","enablePullDownRefresh":true}},{"path":"/pages/application/notice/custom-select-dept","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"black","navigationBarTitleText":"选择部门","enablePullDownRefresh":false}},{"path":"/pages/application/notice/custom-select-dept-cared","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"black","navigationBarTitleText":"选择部门","enablePullDownRefresh":false}},{"path":"/pages/application/notice/custom-select-company","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"black","navigationBarTitleText":"选择单位","enablePullDownRefresh":false}},{"path":"/pages/application/notice/custom-select-person","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"black","navigationBarTitleText":"选择人员","enablePullDownRefresh":false}},{"path":"/pages/application/patrol-report/index","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"black","navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/application/sys-app/Automatic-water-spraying/home","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"black","navigationBarTitleText":"","enablePullDownRefresh":true,"onReachBottomDistance":50}},{"path":"/pages/application/sys-app/Automatic-water-spraying/detail","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"black","navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/application/sys-app/Automatic-water-spraying/more","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"black","navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/application/sys-app/Electrical-fire/home","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"black","navigationBarTitleText":"","enablePullDownRefresh":true,"onReachBottomDistance":50}},{"path":"/pages/application/sys-app/Electrical-fire/detail","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"black","navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/application/sys-app/Electrical-fire/part-info","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"black","navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/application/sys-app/Electrical-fire/searchmore","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"black","navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/application/sys-app/Indoor-fire-hydrant/home","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"black","navigationBarTitleText":"","enablePullDownRefresh":true,"onReachBottomDistance":50}},{"path":"/pages/application/sys-app/Indoor-fire-hydrant/detail","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"black","navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/application/sys-app/Indoor-fire-hydrant/more","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"black","navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/application/sys-app/Outdoor-fire-hydrant/home","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"black","navigationBarTitleText":"","enablePullDownRefresh":true}},{"path":"/pages/application/sys-app/Outdoor-fire-hydrant/hydrant-detail","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"black","enablePullDownRefresh":false,"onReachBottomDistance":50}},{"path":"/pages/application/sys-app/Outdoor-fire-hydrant/choose-device","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"black","navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/application/sys-app/Outdoor-fire-hydrant/bind-smart-cover","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"black","navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/application/sys-app/Outdoor-fire-hydrant/bind-device2","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"black","navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/application/sys-app/Outdoor-fire-hydrant/bind-device3","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"black","navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/application/sys-app/Outdoor-fire-hydrant/edit-base-info","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"black","navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/application/sys-app/Outdoor-fire-hydrant/edit-stuffy","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"black","navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/application/sys-app/Outdoor-fire-hydrant/device-introduce","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"black","navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/application/sys-app/Outdoor-fire-hydrant/edit-pressure","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"black","navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/application/sys-app/Outdoor-fire-hydrant/edit-unify","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"black","navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/application/sys-app/Automatic-fire-alarm/home","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"black","navigationBarTitleText":"","enablePullDownRefresh":true,"onReachBottomDistance":50}},{"path":"/pages/application/sys-app/Automatic-fire-alarm/detail","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"black","navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/application/sys-app/Automatic-fire-alarm/searchmore","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"black","navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/home/my-application/search","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"black","navigationBarTitleText":"应用搜索","enablePullDownRefresh":false}},{"path":"/pages/home/my-application/detail","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"black","navigationBarTitleText":"应用详情","enablePullDownRefresh":false}},{"path":"/pages/home/my-application/edit","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"black","navigationBarTitleText":"编辑应用","enablePullDownRefresh":false}},{"path":"/pages/home/my-application/center","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"black","navigationBarTitleText":"应用中心","enablePullDownRefresh":false}},{"path":"/pages/application/digital-plan/add","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"black","navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/application/digital-plan/home","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"black","navigationBarTitleText":"","enablePullDownRefresh":true}},{"path":"/pages/application/digital-plan/company_list","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"black","navigationBarTitleText":"","enablePullDownRefresh":true}},{"path":"/pages/application/digital-plan/plan_list","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"black","navigationBarTitleText":"","enablePullDownRefresh":true}},{"path":"/pages/application/digital-plan/detail","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"black","navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/application/digital-plan/edit","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"black","navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/home/check-company/unitInformation","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"black","navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/home/check-company/buildingInformation","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"black","navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/home/check-company/buildingDetail","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"black","navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/home/check-company/more","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"black","navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/home/check-authority/company-info","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"black","navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/home/check-authority/iot-device","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"black","navigationBarTitleText":"","enablePullDownRefresh":true}},{"path":"/pages/home/check-authority/notice-post","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"black","navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/home/check-authority/system-info","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"black","navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/home/check-authority/risk-assessment","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"black","navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/home/check-authority/history-score","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"black","navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/home/check-authority/risk-assessing","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"black","navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/home/check-authority/assessing-result","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"black","navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/home/check-authority/building-list","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"black","navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/home/check-authority/building-detail","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"black","navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/home/check-authority/building-image","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"black","navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/common/message/alarm","meta":{},"window":{"navigationStyle":"custom","bounce":"none"}},{"path":"/pages/common/message/fault","meta":{},"window":{"navigationStyle":"custom","bounce":"none"}},{"path":"/pages/common/message/operation","meta":{},"window":{"navigationStyle":"custom","bounce":"none"}},{"path":"/pages/common/message/abnormal","meta":{},"window":{"navigationStyle":"custom","bounce":"none"}},{"path":"/pages/common/message/maint","meta":{},"window":{"navigationStyle":"custom","bounce":"none"}},{"path":"/pages/common/message/patrol","meta":{},"window":{"navigationStyle":"custom","bounce":"none"}},{"path":"/pages/common/message/notice","meta":{},"window":{"navigationStyle":"custom","bounce":"none"}},{"path":"/pages/common/message/systemUpdate","meta":{},"window":{"navigationStyle":"custom","bounce":"none"}},{"path":"/pages/common/alarm/alarm","meta":{},"window":{"navigationStyle":"custom","bounce":"none","pullToRefresh":{"support":true,"color":"#3DA5F1","style":"circle"}}},{"path":"/pages/common/alarmDevice/alarmDevice","meta":{},"window":{"navigationStyle":"custom","bounce":"none","pullToRefresh":{"support":true,"color":"#3DA5F1","style":"circle"}}},{"path":"/pages/common/alarmDevice/alarmDeviceEvent","meta":{},"window":{"navigationStyle":"custom","bounce":"none","pullToRefresh":{"support":true,"color":"#3DA5F1","style":"circle"}}},{"path":"/pages/common/company/company","meta":{},"window":{"navigationBarTitleText":"单位列表","bounce":"none"}},{"path":"/pages/common/company/info","meta":{},"window":{"navigationBarTitleText":"单位信息","bounce":"none"}},{"path":"/pages/common/building/building","meta":{},"window":{"navigationStyle":"custom","bounce":"none","pullToRefresh":{"support":true,"color":"#3DA5F1","style":"circle"}}},{"path":"/pages/common/deviceDistribution/deviceDistribution","meta":{},"window":{"navigationStyle":"custom","bounce":"none"}},{"path":"/pages/common/building/info","meta":{},"window":{"navigationBarTitleText":"建筑信息","bounce":"none"}},{"path":"/pages/common/floor/floor","meta":{},"window":{"navigationStyle":"custom","bounce":"none","pullToRefresh":{"support":true,"color":"#3DA5F1","style":"circle"}}},{"path":"/pages/common/area/area","meta":{},"window":{"navigationStyle":"custom","bounce":"none"}},{"path":"/pages/common/area/info","meta":{},"window":{"navigationStyle":"custom","bounce":"none"}},{"path":"/pages/common/device/device","meta":{},"window":{"navigationStyle":"custom","bounce":"none","pullToRefresh":{"support":true,"color":"#3DA5F1","style":"circle"}}},{"path":"/pages/common/allDevice/allDevice","meta":{},"window":{"navigationStyle":"custom","bounce":"none"}},{"path":"/pages/common/device/info","meta":{},"window":{"navigationBarTitleText":"设备信息","navigationStyle":"custom","bounce":"none"}},{"path":"/pages/common/maintenance/repair/repairTask/repairTask","meta":{},"window":{"navigationStyle":"custom","bounce":"none","pullToRefresh":{"support":true,"color":"#3DA5F1","style":"circle"}}},{"path":"/pages/common/maintenance/repair/repairTask/repairTaskOption","meta":{},"window":{"navigationStyle":"custom","bounce":"none"}},{"path":"/pages/common/maintenance/repair/repairTask/repairTaskDetails","meta":{},"window":{"navigationBarTitleText":"基本信息","bounce":"none"}},{"path":"/pages/common/maintenance/repair/repairTaskAdd/repairTaskAdd","meta":{},"window":{"navigationBarTitleText":"新增维修任务","bounce":"none"}},{"path":"/pages/common/maintenance/repair/repairTaskAdd/addressBook","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"white","bounce":"none"}},{"path":"/pages/common/maintenance/repair/repairTask/repairBack","meta":{},"window":{"navigationBarTitleText":"申请退单","bounce":"none"}},{"path":"/pages/common/maintenance/repair/repairReport/repairReport","meta":{},"window":{"navigationStyle":"custom","bounce":"none","pullToRefresh":{"support":true,"color":"#3DA5F1","style":"circle"}}},{"path":"/pages/common/maintenance/maintain/maintainTask/maintainTask","meta":{},"window":{"navigationStyle":"custom","bounce":"none","pullToRefresh":{"support":true,"color":"#3DA5F1","style":"circle"}}},{"path":"/pages/common/maintenance/maintain/maintainTask/maintainTaskOption","meta":{},"window":{"navigationStyle":"custom","bounce":"none"}},{"path":"/pages/common/maintenance/maintain/maintainTask/maintainTaskOptionV2","meta":{},"window":{"navigationStyle":"custom","bounce":"none"}},{"path":"/pages/common/maintenance/maintain/maintainTask/maintainTaskDetails","meta":{},"window":{"navigationBarTitleText":"基本信息","bounce":"none"}},{"path":"/pages/common/maintenance/maintain/maintainTask/maintainTaskDetailsV2","meta":{},"window":{"navigationStyle":"custom","navigationBarTitleText":"基本信息","bounce":"none"}},{"path":"/pages/common/maintenance/maintain/maintainTask/maintainTaskTerms","meta":{},"window":{"navigationBarTitleText":"维保检查项","bounce":"none"}},{"path":"/pages/common/maintenance/maintain/maintainTask/maintainTaskEdit","meta":{},"window":{"navigationBarTitleText":"填写维保信息","bounce":"none"}},{"path":"/pages/common/maintenance/maintain/maintainReport/maintainReport","meta":{},"window":{"navigationStyle":"custom","bounce":"none","pullToRefresh":{"support":true,"color":"#3DA5F1","style":"circle"}}},{"path":"/pages/common/maintenance/testing/testingTask/testingTask","meta":{},"window":{"navigationStyle":"custom","bounce":"none","pullToRefresh":{"support":true,"color":"#3DA5F1","style":"circle"}}},{"path":"/pages/common/maintenance/testing/testingReport/testingReport","meta":{},"window":{"navigationStyle":"custom","bounce":"none","pullToRefresh":{"support":true,"color":"#3DA5F1","style":"circle"}}},{"path":"/pages/common/maintenance/patrol/patrolTask/patrolTask","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"white","bounce":"none","pullToRefresh":{"support":true,"color":"#3DA5F1","style":"circle"}}},{"path":"/pages/common/maintenance/patrol/patrolTask/patrolTaskOption","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"white","bounce":"none"}},{"path":"/pages/common/maintenance/patrol/patrolTask/patrolTaskSite","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"white","bounce":"none"}},{"path":"/pages/common/webViewPage/webViewPage","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/common/eventInfo/eventInfo","meta":{},"window":{"navigationBarTitleText":"详情","bounce":"none"}},{"path":"/pages/common/flv/flv","meta":{},"window":{"navigationStyle":"custom","bounce":"none"}},{"path":"/pages/common/video/video","meta":{},"window":{"navigationStyle":"custom","bounce":"none","pullToRefresh":{"support":true,"color":"#3DA5F1","style":"circle"}}},{"path":"/pages/common/video/info","meta":{},"window":{"navigationBarTitleText":"摄像头信息","bounce":"none"}},{"path":"/pages/common/setting/setting","meta":{},"window":{"navigationStyle":"custom","bounce":"none"}},{"path":"/pages/common/about/about","meta":{},"window":{"navigationStyle":"custom","bounce":"none"}},{"path":"/pages/common/about/updateLog","meta":{},"window":{"navigationStyle":"custom","bounce":"none"}},{"path":"/pages/common/about/updateLogDesc","meta":{},"window":{"navigationStyle":"custom","bounce":"none"}},{"path":"/pages/common/helpFeedback/helpFeedback","meta":{},"window":{"navigationStyle":"custom","bounce":"none"}},{"path":"/pages/common/helpFeedback/helpDesc","meta":{},"window":{"navigationStyle":"custom","bounce":"none"}},{"path":"/pages/common/helpFeedback/feedback","meta":{},"window":{"navigationStyle":"custom","bounce":"none"}},{"path":"/pages/common/user/user","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"black","bounce":"none"}},{"path":"/pages/common/user/switchAccount","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"black","bounce":"none"}},{"path":"/pages/common/updatePwd/updatePwd","meta":{},"window":{"navigationBarTitleText":"修改密码","bounce":"none"}},{"path":"/pages/common/monitoringSystem/systemListDefault","meta":{},"window":{"navigationStyle":"custom","bounce":"none","pullToRefresh":{"support":true,"color":"#3DA5F1","style":"circle"}}},{"path":"/pages/common/monitoringSystem/systemDevice","meta":{},"window":{"navigationStyle":"custom","bounce":"none","pullToRefresh":{"support":true,"color":"#3DA5F1","style":"circle"}}},{"path":"/pages/common/appExtension/appExtension","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"black","bounce":"none"}},{"path":"/pages/common/companySwitch/companySearch","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"black","bounce":"none"}},{"path":"/pages/common/addressBook/addressBook","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"white","bounce":"none"}},{"path":"/pages/common/personSign/personSign","meta":{},"window":{"navigationBarTitleText":"人员签到","enablePullDownRefresh":false,"bounce":"none"}},{"path":"/pages/common/electricalFacilities/electricalFacilities","meta":{},"window":{"navigationStyle":"custom","enablePullDownRefresh":true,"bounce":"none"}},{"path":"/pages/common/electricalFacilities/allScene","meta":{},"window":{"navigationStyle":"custom","bounce":"none"}},{"path":"/pages/common/electricalFacilities/sceneInfo","meta":{},"window":{"navigationStyle":"custom","enablePullDownRefresh":true,"bounce":"none"}},{"path":"/pages/common/electricalFacilities/deviceInfo","meta":{},"window":{"navigationStyle":"custom","bounce":"none"}},{"path":"/pages/common/electricalFacilities/locationInfo","meta":{},"window":{"navigationStyle":"custom","bounce":"none"}},{"path":"/pages/common/device/sense_info","meta":{},"window":{"navigationBarTitleText":"模拟量信息","navigationStyle":"custom","bounce":"none"}},{"path":"/pages/common/helmet/helmet","meta":{},"window":{"navigationBarTitleText":"安全帽","navigationStyle":"custom","bounce":"none"}},{"path":"/pages/common/helmet/info","meta":{},"window":{"navigationBarTitleText":"安全帽详情","navigationStyle":"custom","bounce":"none"}},{"path":"/pages/common/helmet/event/event_history","meta":{},"window":{"navigationBarTitleText":"告警事件","navigationStyle":"custom","bounce":"none"}},{"path":"/pages/application/deluge-system/list","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"black","navigationBarTitleText":"","enablePullDownRefresh":true}},{"path":"/pages/application/deluge-system/detail","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"black","navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/application/deluge-system/app_web3d","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"black","navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/common/deviceDistribution/three-building","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"black","navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/application/deluge-system/device-list","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"black","navigationBarTitleText":"","enablePullDownRefresh":true}},{"path":"/pages/application/deluge-system/notice","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"black","navigationBarTitleText":"","enablePullDownRefresh":false}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
