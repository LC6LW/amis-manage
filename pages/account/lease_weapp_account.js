
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
    "title": "租赁账号",
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
                        "url": url.updateLeaseWeappAccount,
                        "data": {
                            "id": "${id}",
                            "business_license_number": "${business_license_number}",
                            "business_license_name": "${business_license_name}",
                            "weapp_id": "${weapp_id}",
                            "weapp_name": "${weapp_name}",
                            "weapp_sign": "${weapp_sign}",
                            "weapp_origin_id": "${weapp_origin_id}",
                            "super_manger_name": "${super_manger_name}",
                            "legal_rep": "${legal_rep}",
                            "member_management": "${member_management}",
                            "remark": "${remark}",

                        }
                    },
                    "controls": [

                        {
                            "type": "input-text",
                            "name": "business_license_number",
                            "placeholder": "营业执照编号",
                            "required": true,

                            "label": "营业执照编号："
                        },

                        {
                            "type": "input-text",
                            "name": "business_license_name",
                            "placeholder": "营业执照名称",
                            "required": true,

                            "label": "营业执照名称："
                        },
                        {
                            "type": "divider"
                        },
                        {
                            "type": "input-text",
                            "name": "weapp_name",
                            "placeholder": "小程序名称",
                            "label": "小程序名称：",

                            "required": true,

                        },


                        {
                            "type": "input-text",
                            "name": "weapp_id",
                            "placeholder": "小程序appid",
                            "required": true,

                            "label": "小程序appid："
                        },

                        {
                            "type": "input-text",
                            "name": "weapp_sign",
                            "placeholder": "小程序密钥",
                            "required": true,

                            "label": "小程序密钥："
                        },

                        {
                            "type": "input-text",
                            "name": "weapp_origin_id",
                            "placeholder": "原始id",
                            "required": true,

                            "label": "原始id："
                        },

                        {
                            "type": "divider"
                        },

                        {
                            "type": "input-text",
                            "name": "super_manger_name",
                            "placeholder": "超管名字",
                            "required": true,

                            "label": "超管名字："
                        },

                        {
                            "type": "input-text",
                            "name": "legal_rep",
                            "placeholder": "法人名字",
                            "required": true,

                            "label": "法人名字："
                        },
                        {
                            "type": "input-text",
                            "name": "member_management",
                            "placeholder": "成员管理",
                            "required": true,

                            "label": "成员管理："
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
                },

            }
        },
        {
            "type": "button",
            "label": "删除",
            "actionType": "ajax",
            "confirmText": "您确认要删除?",
            "api": {
                "method": "post",
                "url": url.deleteLeaseWeappAccount,
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
            "name": "business_license_number",
            "searchable": {
                "type": "input-text",
                "name": "business_license_number",
                "label": "营业执照编号",
                "placeholder": "输入营业执照编号"
            },
            "fixed": "left",
            "label": "营业执照编号"
        },
        {
            "type": "text",
            "name": "business_license_name",
            "searchable": {
                "type": "input-text",
                "name": "business_license_name",
                "label": "营业执照名称",
                "placeholder": "输入营业执照名称"
            },
            "label": "营业执照名称"
        },
        {
            "type": "text",
            "name": "weapp_name",
            "searchable": {
                "type": "input-text",
                "name": "weapp_name",
                "label": "小程序名称",
                "placeholder": "输入 小程序名称"
            },
            "label": "小程序名称"
        },
        {
            "type": "text",
            "name": "weapp_id",
            "searchable": {
                "type": "input-text",
                "name": "weapp_id",
                "label": "小程序appid",
                "placeholder": "输入 小程序appid"
            },
            "label": "小程序appid"
        },

        {
            "type": "text",
            "name": "weapp_sign",
            "searchable": {
                "type": "input-text",
                "name": "weapp_sign",
                "label": "小程序密钥",
                "placeholder": "输入 小程序密钥"
            },
            "label": "小程序密钥"
        },
        {
            "type": "text",
            "name": "weapp_origin_id",
            "searchable": {
                "type": "input-text",
                "name": "weapp_origin_id",
                "label": "原始id",
                "placeholder": "输入 原始id"
            },
            "label": "原始id"
        },
        {
            "type": "text",
            "name": "super_manger_name",
            "searchable": {
                "type": "input-text",
                "name": "super_manger_name",
                "label": "超管名字",
                "placeholder": "输入 超管名字"
            },
            "label": "超管名字"
        },
        {
            "type": "text",
            "name": "legal_rep",
            "searchable": {
                "type": "input-text",
                "name": "legal_rep",
                "label": "法人名字",
                "placeholder": "输入 法人名字"
            },
            "label": "法人名字"
        },
        {
            "type": "text",
            "name": "member_management",
            "label": "成员管理"
        },
        {
            "type": "text",
            "name": "use_count",
            "label": "已使用次数"
        },
        {
            "type": "text",
            "name": "create_time",
            "label": "创建时间"
        },




        // {
        //     "name": "status",
        //     "label": "状态",
        //     // "sortable": true,
        //     // "searchable": true,
        //     "type": "mapping",
        //
        //     "map": {
        //         "0": "<span class='label ' style='background: #8B0000'>准备中</span>",
        //         "1": "<span class='label' style='background: #00008B'>已发货</span>",
        //         "2": "<span class='label' style='background: #FFA500'>退货</span>",
        //         "3": "<span class='label' style='background: #006400'>已完成</span>",
        //
        //     }
        // },



    ];
}

function generateHeaderToolbar() {
    return [
        {
            "label": "导出excel",
            "type": "action",
            "actionType": "download",
            "tooltip": "导出全部数据",
            "icon": "fa fa-snapchat-square",
            "iconClassName": "pull-left",
            "api" : url.exportLeaseWeappAccount,

        },
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
        "url": url.leaseWeappAccount,
        "data": {
            "page": "${page}",
            "limit": "${perPage}",
            "where": {
                "business_license_number": "${business_license_number}",
                "business_license_name": "${business_license_name}",
                "weapp_name": "${weapp_name}",
                "weapp_sign": "${weapp_sign}",
                "weapp_id": "${weapp_id}",
                "weapp_origin_id": "${weapp_origin_id}",
                "super_manger_name": "${super_manger_name}",
                "legal_rep": "${legal_rep}",

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
            "label": "新增账户",
            "icon": "fa fa-plus pull-left",
            "primary": true,
            "dialog": {
                "title": "新增账户",
                "size":"lg",
                "body": {
                    "type": "form",
                    "name": "sample-edit-form",
                    "api": {
                        "method": "post",
                        "url": url.createLeaseWeappAccount,
                        "data": {
                            "business_license_number": "${business_license_number}",
                            "business_license_name": "${business_license_name}",
                            "weapp_id": "${weapp_id}",
                            "weapp_name": "${weapp_name}",
                            "weapp_sign": "${weapp_sign}",
                            "weapp_origin_id": "${weapp_origin_id}",
                            "super_manger_name": "${super_manger_name}",
                            "legal_rep": "${legal_rep}",
                            "member_management": "${member_management}",
                            "remark": "${remark}",

                        }
                    },
                    "controls": [

                        {
                            "type": "input-text",
                            "name": "business_license_number",
                            "placeholder": "营业执照编号",
                            "required": true,

                            "label": "营业执照编号："
                        },

                        {
                            "type": "input-text",
                            "name": "business_license_name",
                            "placeholder": "营业执照名称",
                            "required": true,

                            "label": "营业执照名称："
                        },
                        {
                            "type": "divider"
                        },
                        {
                            "type": "input-text",
                            "name": "weapp_name",
                            "placeholder": "小程序名称",
                            "label": "小程序名称：",

                            "required": true,

                        },


                        {
                            "type": "input-text",
                            "name": "weapp_id",
                            "placeholder": "小程序appid",
                            "required": true,

                            "label": "小程序appid："
                        },

                        {
                            "type": "input-text",
                            "name": "weapp_sign",
                            "placeholder": "小程序密钥",
                            "required": true,

                            "label": "小程序密钥："
                        },

                        {
                            "type": "input-text",
                            "name": "weapp_origin_id",
                            "placeholder": "原始id",
                            "required": true,

                            "label": "原始id："
                        },

                        {
                            "type": "divider"
                        },

                        {
                            "type": "input-text",
                            "name": "super_manger_name",
                            "placeholder": "超管名字",
                            "required": true,

                            "label": "超管名字："
                        },

                        {
                            "type": "input-text",
                            "name": "legal_rep",
                            "placeholder": "法人名字",
                            "required": true,

                            "label": "法人名字："
                        },
                  {
                            "type": "input-text",
                            "name": "member_management",
                            "placeholder": "成员管理",
                            "required": true,

                            "label": "成员管理："
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
