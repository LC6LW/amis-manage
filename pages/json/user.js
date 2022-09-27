
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
    }
];

page = {
    "$schema": "https://houtai.baidu.com/v2/schemas/page.json#",
    "title": "用户列表",
    // "remark": "发货",
    "brandName": "",
    // "initApi": url.getCurLoginUserInfo,
    "toolbar": toolbars,
    "type": "page",
    "body": {
        "filter": filter,
        "type": "crud",
        "syncLocation" : false,
        "api": api,
        "defaultParams": defaultParams,
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
                        "url": url.userUpdate,
                        "data": {
                            "id": "${id}",
                            "user_mobile": "${user_mobile}",
                            "user_status": "${user_status}",
                            "user_name": "${user_name}",
                            "user_role": "${user_role}",
                            "user_pwd": "${user_pwd}",
                            "is_admin": "${is_admin}",
                            "user_code": "${user_code}",
                            "user_permission": "${user_permission}",
                            "remark": "${remark}",
                        }
                    },


                    "controls": [

                        {
                            "type": "input-text",
                            "name": "user_name",
                            "placeholder": "姓名",
                            "required": true,

                            "label": "姓名："
                        },
                        {
                            "type": "divider"
                        },
                        {
                            "type": "input-text",
                            "name": "user_code",
                            "placeholder": "代号",
                            "required": true,

                            "label": "代号："
                        },
                        {
                            "type": "divider"
                        },
                        {
                            "type": "input-text",
                            "name": "user_mobile",
                            "placeholder": "手机号",
                            "validations": {
                                "isPhoneNumber": true,
                            },
                            "label": "手机号：",
                            "required": true,

                        },
                        {
                            "type": "divider"
                        },

                        {
                            "type": "input-password",
                            "name": "user_pwd",
                            "placeholder": "密码",
                            // "required": true,
                            "desc": "为空则不修改密码",
                            "label": "密码："
                        },
                        {
                            "type": "divider"
                        },

                        {
                            "type": "radios",
                            "name": "is_admin",
                            "label": "超级管理员：",
                            "value": 0,
                            "required": true,
                            "options": [
                                {
                                    "label": "是",
                                    "value": 1
                                },
                                {
                                    "label": "否",
                                    "value": 0
                                },

                            ]
                        },
                        {
                            "type": "divider",

                        },

                        {
                            "type": "radios",
                            "name": "user_status",
                            "label": "状态：",
                            "value": 1,
                            "required": true,
                            "options": [
                                {
                                    "label": "正常",
                                    "value": 1
                                },
                                {
                                    "label": "禁用",
                                    "value": 0
                                },

                            ]
                        },
                        {
                            "type": "divider",
                            "hiddenOn" : "data.is_admin == 1",

                        },



                        {
                            "type": "list-select",
                            "name": "user_role",
                            "hiddenOn" : "data.is_admin == 1",
                            "label": "身份：",
                            "desc": "可多选",
                            // "required": true,

                            "multiple": true,

                            "valueField": "role_id",
                            "labelField": "role_name",
                            "source": url.getAllRole+'?type=1',
                        },
                        {
                            "type": "divider",
                            "hiddenOn" : "data.is_admin == 1",
                        },

                        {
                            "type": "list-select",
                            "name": "user_permission",
                            "hiddenOn" : "data.is_admin == 1",
                            "label": "权限：",
                            "desc": "可多选",
                            // "required": true,

                            "multiple": true,

                            "valueField": "role_id",
                            "labelField": "role_name",
                            "source": url.getAllRole+'?type=2',
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
        // {
        //     "type": "button",
        //     "label": "设为离职",
        //     "actionType": "ajax",
        //     "confirmText": "是否确认离职?",
        //     "api": {
        //         "method": "post",
        //         "url": url.userResign,
        //         "data": {
        //             "id": "${id}",
        //         }
        //     },
        // },
        {
            "type": "button",
            "label": "删除",
            "actionType": "ajax",
            "confirmText": "您确认要删除?",
            "api": {
                "method": "post",
                "url": url.userDelete,
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
            "name": "user_name",
            "label": "姓名"
        },
        {
            "type": "text",
            "name": "user_code",
            "label": "客服代号"
        },
        {
            "type": "text",
            "name": "user_mobile",
            "label": "手机号"
        },
        {
            "type": "text",
            "name": "role_name",
            "label": "身份"
        },
        {
            "type": "text",
            "name": "permission_name",
            "label": "权限"
        },
        {
            "name": "is_admin",
            "label": "角色",
            "type": "mapping",
            "map": {
                "1": "<span class='label label-success'>超管</span>",
                "0": "<span class='label label-warning'  style='background: #4a90e2'>普通</span>",
            }
        },

        {
            "name": "user_status",
            "label": "状态",
            "type": "mapping",
            "map": {
                "1": "<span class='label label-info'>正常</span>",
                "2": "<span class='label label-warning'  style='background: #faad14'>已离职</span>",
                "0": "<span class='label label-danger'>已禁用</span>",
            }
        },
        {
            "type": "text",
            "name": "remark",
            "label": "备注"
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
        // {
        //     "type": "button",
        //     "label": "导出excel",
        //     "actionType": "ajax",
        //     "size": "sm",
        //     "tooltip": "导出全部数据",
        //     "icon": "fa fa-snapchat-square",
        //     "iconClassName": "pull-left",
        //     "level": "light",
        //     "api" :{
        //         "method" : "post",
        //         "url" : url.receiveTooldsListExcel,
        //         "data": {
        //             "where": {
        //                 "category": "${category}",
        //                 // "attribute[~]": "${attribute}",
        //                 "attribute": "${attribute}",
        //                 "content[~]": "${content}",
        //             },
        //         },
        //     },
        //     "redirect": url.fileDown+"?path=${path}"
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
        "url": url.userLists,
        "data": {
            "page": "${page}",
            "limit": "${perPage}",
            "where": {
                "user_mobile": "${s_user_mobile|default:undefined}",
                "user_name": "${s_user_name|default:undefined}",

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
            "label": "新增用户",
            "icon": "fa fa-plus pull-left",
            "primary": true,
            "dialog": {
                "title": "新增用户",
                "size":"lg",
                "body": {
                    "type": "form",
                    "name": "sample-edit-form",
                    "api": {
                        "method": "post",
                        "url": url.userCreate,
                        "data": {
                            "user_mobile": "${n_user_mobile}",
                            "user_status": "${user_status}",
                            "user_name": "${n_user_name}",
                            "user_role": "${user_role}",
                            "user_pwd": "${user_pwd}",
                            "is_admin": "${is_admin}",
                            "user_code": "${n_user_code}",
                            "user_permission": "${user_permission}",
                            "remark": "${remark}",
                        }
                    },
                    "controls": [

                        {
                            "type": "input-text",
                            "name": "n_user_name",
                            "placeholder": "姓名",
                            "required": true,

                            "label": "姓名："
                        },
                        {
                            "type": "divider"
                        },
                        {
                            "type": "input-text",
                            "name": "n_user_code",
                            "placeholder": "客服代号",
                            "required": true,

                            "label": "客服代号："
                        },
                        {
                            "type": "divider"
                        },
                        {
                            "type": "input-text",
                            "name": "n_user_mobile",
                            "placeholder": "手机号",
                            "label": "手机号：",
                            "validations": {
                                "isPhoneNumber": true,
                            },
                            "required": true,

                        },
                        {
                            "type": "divider"
                        },

                        {
                            "type": "input-password",
                            "name": "user_pwd",
                            "placeholder": "密码",
                            "required": true,

                            "label": "密码："
                        },
                        {
                            "type": "divider"
                        },
                        {
                            "type": "radios",
                            "name": "is_admin",
                            "label": "超级管理员：",
                            "value": 0,
                            "required": true,
                            "options": [
                                {
                                    "label": "是",
                                    "value": 1
                                },
                                {
                                    "label": "否",
                                    "value": 0
                                },

                            ]
                        },
                        {
                            "type": "divider",
                        },


                        {
                            "type": "radios",
                            "name": "user_status",
                            "label": "状态：",
                            "value": 1,
                            "required": true,
                            "options": [
                                {
                                    "label": "正常",
                                    "value": 1
                                },
                                {
                                    "label": "禁用",
                                    "value": 0
                                },

                            ]
                        },
                        {
                            "type": "divider",
                        },



                        {
                            "type": "list-select",
                            "name": "user_role",
                            "label": "身份：",
                            "desc": "可多选",
                            "hiddenOn" : "data.is_admin == 1",
                            // "required": true,

                            "multiple": true,

                            "valueField": "role_id",
                            "labelField": "role_name",
                            "source": url.getAllRole+'?type=1',
                        },
                        {
                            "type": "divider",
                            "hiddenOn" : "data.is_admin == 1",
                        },


                        {
                            "type": "list-select",
                            "name": "user_permission",
                            "hiddenOn" : "data.is_admin == 1",
                            "label": "权限：",
                            "desc": "可多选",
                            // "required": true,

                            "multiple": true,

                            "valueField": "role_id",
                            "labelField": "role_name",
                            "source": url.getAllRole+'?type=2',
                        },
                        {
                            "type": "divider",
                            "hiddenOn" : "data.is_admin == 1",
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

const  member_list_conf = {
    "page" : page
}

export default member_list_conf
