
import url from "../../config/urlPath.js"

let page;

// 每页显示数量
let defaultParams  = {
    "perPage": 15
}
// toolbar
let toolbars = generateToolbars();

// headerToolbar
let headerToolbar = generateHeaderToolbar();

// 搜搜
let filter = generateFilter();

// 查询数据接口
let api = generateSelectApi();

// table字段
let bodyColumns = generateBodyColumns();


// 悬浮操作 编辑 删除 查看
let itemActions = generateItemActions();

// 底部工具
let footerToolbar = [
    {
        "type": "pagination",
        "align": "right",
        "layout": "total,perPage,pager,go",

        "mode": "normal",
        "activePage": 1,
        "perPage": defaultParams.perPage,
        "maxButtons": 7,
        "showPerPage": true,
        "perPageAvailable": [
            10,
            20,
            50,
            100
        ],
        "showPageInput": true,
        "disabled": false
    }];

page = {
    "$schema": "https://houtai.baidu.com/v2/schemas/page.json#",
    "title": "产品列表",
    // "remark": "发货",
    "brandName": "",
    // "initApi": url.getCurLoginUserInfo,
    "toolbar": toolbars,
    "type": "page",
    "body": {
        // "filter": filter,
        "type": "crud",
        "syncLocation" : false,
        "api": api,
        "defaultParams": defaultParams,
        "autoGenerateFilter": true,
        // 是否显示多选框
        // "itemCheckableOn" : "this.is_check=='否'",

        // 点击不刷新
        "keepItemSelectionOnPageChange": true,

        "headerToolbar": headerToolbar,
        "itemActions": itemActions,

        "footerToolbar" : footerToolbar,

        "bulkActions": [
        ],

        "columns": bodyColumns
    }
}

function generateItemActions() {
    return  [
        {
            "type": "button",
            "label": "编辑",
            "actionType": "dialog",
            "dialog": {
                // "position": "left",
                "size":"md",
                "title": "编辑",
                "body": {
                    "type": "form",
                    "name": "sample-edit-form",
                    "api": {
                        "method": "post",
                        "url": url.updateProduct,
                        "data": {
                            "id": "${id}",
                            "product_name": "${product_name}",
                            "short_name": "${short_name}",
                            "is_sd": "${is_sd}",
                            "product_url": "${product_url}",
                            "remark": "${remark}",
                        }
                    },
                    "controls": [

                        {
                            "type": "input-text",
                            "name": "product_name",
                            "placeholder": "产品名称",
                            "required": true,

                            "label": "产品名称："
                        },
                        {
                            "type": "divider"
                        },

                        {
                            "type": "input-text",
                            "name": "short_name",
                            "placeholder": "简称",
                            "required": true,

                            "label": "简称："
                        },
                        {
                            "type": "divider"
                        },

                        {
                            "type": "input-url",
                            "name": "product_url",
                            "placeholder": "网址",

                            "label": "网址："
                        },
                        {
                            "type": "divider"
                        },

                        {
                            "type": "radios",
                            "name": "is_sd",
                            "label": "是否独立部署",
                            // "required": true,
                            "value": 0,
                            "options": [
                                {
                                    "label": "是",
                                    "value": 1
                                },
                                {
                                    "label": "否",
                                    "value": 2
                                },

                            ]
                        },

                        {
                            "type": "divider"
                        },


                        {
                            "type": "textarea",
                            "name": "remark",
                            "placeholder": "备注",
                            // "required": true,
                            "label": "备注："
                        },


                    ]
                }
            }
        },
        {
            "type": "button",
            "label": "删除",
            "actionType": "ajax",
            "confirmText": "您确认要删除?",
            "api": {
                "method": "post",
                "url": url.deleteProduct,
                "data": {
                    "id": "${id}",
                }
            },
        },
    ]
}

function generateBodyColumns() {
    return [
        {

            "name": "id",
            "label": "ID",
            "width": 20,
            "sortable": true,
            "type": "text",
            "toggled": true,
        },
        {
            "type": "text",
            "name": "product_name",
            "searchable": {
                "type": "input-text",
                "name": "product_name",
                "label": "产品名称",
                "placeholder": "产品名称"
            },
            "fixed": "left",
            "label": "产品名称"
        },
        {
            "type": "text",
            "name": "short_name",
            "searchable": {
                "type": "input-text",
                "name": "short_name",
                "label": "简称",
                "placeholder": "简称"
            },
            "label": "简称"
        },



        {
            "type": "link",
            "name": "product_url",
            "disabledOn": "data.product_url == ''",
            "title" :"12",

            "label": "网址"
        },


        {
            "name": "is_sd",
            "label": "是否独立部署",
            // "sortable": true,
            // "searchable": true,
            "type": "mapping",

            "map": {
                "2": "<span class='label' style='background: #FFA500'>否</span>",
                "1": "<span class='label label-success'>是</span>",
            }
        },


        {
            "type": "text",
            "name": "remark",
            "label": "备注"
        },
        {
            "type": "text",
            "name": "create_time",
            "label": "创建时间"
        },






    ];
}

function generateHeaderToolbar() {
    return [
        // {
        //     "label": "导出excel",
        //     "type": "action",
        //     "actionType": "download",
        //     "tooltip": "导出全部数据",
        //     "icon": "fa fa-snapchat-square",
        //     "iconClassName": "pull-left",
        //     "api" : url.exportLeaseWeappAccount,
        //
        // },
        {
            "type": "tpl",
            "tpl": "　　共 <span style=\"color: #00BFFF; font-size: 18px\">${count}</span>  条 　 ",
            "className": "v-middle"
        },
        // "export-excel",
        "bulkActions",
        {
            "type": "columns-toggler",
            "className": "pull-right",
            "align": "right"
        },
    ];
}

function generateSelectApi() {
    return {
        "method": "post",
        "url": url.ProductList,
        "data": {
            "page": "${page}",
            "limit": "${perPage}",
            "where": {
                "product_name": "${product_name}",
                "short_name": "${short_name}",


            },

        }
    }
}

// 顶层工具
function generateFilter()
{
    return {
        "title": "操作",
        "submitText": "",
        "controls": [

            {
                "type": "text",
                "name": "s_user_name",
                "placeholder": "通过姓名关键字搜索",
            },

            {
                "type": "text",
                "name": "s_user_mobile",
                "placeholder": "通过手机号搜索",
            },

            {
                "type": "submit",
                "level": "success",
                "icon": "fa fa-search",
                "label": "搜索",
            },



        ]
    };
}

// 顶层工具
function generateToolbars() {
    return [

        // 新增
        {
            "type": "button",
            "actionType": "dialog",
            "label": "新增产品",
            "icon": "fa fa-plus pull-left",
            "primary": true,
            "dialog": {
                "title": "新增产品",
                "size":"lg",
                "body": {
                    "type": "form",
                    "name": "sample-edit-form",
                    "api": {
                        "method": "post",
                        "url": url.createProduct,
                        "data": {
                            "product_name": "${product_name}",
                            "short_name": "${short_name}",
                            "is_sd": "${is_sd}",
                            "product_url": "${product_url}",
                            "remark": "${remark}",
                        }
                    },
                    "controls": [

                        {
                            "type": "input-text",
                            "name": "product_name",
                            "placeholder": "产品名称",
                            "required": true,

                            "label": "产品名称："
                        },
                        {
                            "type": "divider"
                        },

                        {
                            "type": "input-text",
                            "name": "short_name",
                            "placeholder": "简称",
                            "required": true,

                            "label": "简称："
                        },
                        {
                            "type": "divider"
                        },

                        {
                            "type": "input-url",
                            "name": "product_url",
                            "placeholder": "网址",

                            "label": "网址："
                        },
                        {
                            "type": "divider"
                        },

                        {
                            "type": "radios",
                            "name": "is_sd",
                            "label": "是否独立部署",
                            // "required": true,
                            "value": 0,
                            "options": [
                                {
                                    "label": "是",
                                    "value": 1
                                },
                                {
                                    "label": "否",
                                    "value": 2
                                },

                            ]
                        },

                        {
                            "type": "divider"
                        },



                        {
                            "type": "textarea",
                            "name": "remark",
                            "placeholder": "备注",
                            // "required": true,
                            "label": "备注："
                        },



                    ]
                }
            }
        }
    ];
}

const  account_manager = {
    "page" : page
}

export default account_manager
