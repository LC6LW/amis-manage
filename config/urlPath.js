import info from "./env.js";

const domain = info.domain;

export default {
    domain : domain,
    memberList: domain + '/api/OrderList/OrderEntrance',  // 订单列表


    uploadFile: domain + '/common/Upload/uploadFile',  // 查询
    downExportOrder: domain + '/common/Upload/downExportOrder',  // 查询
    totalStatistics: domain + '/admin/Chart/totalStatistics',  // 查询
    orderCreate: domain + '/api/order/orderCreate',  // 查询
    copyOrder: domain + '/api/order/copyOrder',  // 查询
    orderUpdate: domain + '/api/order/orderUpdate',  // 查询
    orderAuthUpdate: domain + '/api/order/orderAuthUpdate',  // 查询
    againTransferRefund: domain + '/api/order/againTransferRefund',  // 查询
    orderRefundUpdate: domain + '/api/order/orderRefundUpdate',  // 查询
    orderDelete: domain + '/api/order/orderDelete',  // 查询
    orderDetail: domain + '/api/order/orderDetail',  // 查询
    orderChart: domain + '/admin/Chart/orderChart',  // 查询
    exportOrder: domain + '/api/order/exportOrder',  // 查询
    PreSalesTop: domain + '/api/OrderChart/PreSalesTop',  // 查询

    leaseWeappAccount: domain + '/api/Account/leaseWeappAccount',  // 查询

    ProductList: domain + '/api/Product/ProductList',  // 查询
    createProduct: domain + '/api/Product/createProduct',  // 查询
    updateProduct: domain + '/api/Product/updateProduct',  // 查询
    deleteProduct: domain + '/api/Product/deleteProduct',  // 查询


    addConsulting: domain + '/api/Kpi/addConsulting',  // 查询
    todayConsultingNumByUser: domain + '/api/Kpi/todayConsultingNumByUser',  // 查询
    PreSalesConsultingList: domain + '/api/Kpi/PreSalesConsultingList',  // 查询
    serverList: domain + '/api/Kpi/serverList',  // 查询
    buildList: domain + '/api/Kpi/buildList',  // 查询
    asList: domain + '/api/Kpi/asList',  // 查询
    authList: domain + '/api/Kpi/authList',  // 查询
    deleteLeaseWeappAccount: domain + '/api/Account/deleteLeaseWeappAccount',  // 查询
    createLeaseWeappAccount: domain + '/api/Account/createLeaseWeappAccount',  // 查询
    updateLeaseWeappAccount: domain + '/api/Account/updateLeaseWeappAccount',  // 查询
    exportLeaseWeappAccount: domain + '/api/Account/exportLeaseWeappAccount',  // 查询

    orderNotify: domain + '/admin/msg/Message/notify',  // 查询
    orderOperationRecordByOrderId: domain + '/api/order/orderOperationRecordByOrderId',  // 查询


    getOrderProducts: domain + '/api/order/getOrderProducts',  // 查询
    userInfoByRole: domain + '/admin/user/getUserInfoByShortName',  // 查询
    userLists: domain + '/admin/user/userLists',  // 查询
    orderLogLists: domain + '/api/orderLog/lists',  // 查询
    logDetail: domain + '/api/orderLog/logDetail',  // 查询
    userCreate: domain + '/admin/user/userCreate',  // 查询
    userUpdate: domain + '/admin/user/userUpdate',  // 查询
    getAllRole: domain + '/admin/user/getAllRole',  // 查询
    userDelete: domain + '/admin/user/userDelete',  // 查询
    userResign: domain + '/admin/user/userResign',  // 查询

    leaseWeAppAccountList: domain + '/api/Information/leaseWeAppAccountList',  // 查询
    AccountDetail: domain + '/api/Information/AccountDetail',  // 查询

    login: domain + '/admin/login/login',  // 查询

    getCurLoginUserInfo: domain + '/admin/user/getCurLoginUserInfo',  // 查询
}
