import chat from "./chat.js"
import overview from "../desk/overview.js"

// import test from "../manage/test.js"

import user_list_conf from "./user.js"

import {explode, count, unset, in_array, array_merge} from '../../js/php.js';

const roleMap = {
    pre_sales: 1, // 售前
    auth: 2,   // 认证
    server: 3,   // 服务器
    build: 4,   // 搭建环节
    as: 5,   // 售后
    refund: 6,   // 退款纠纷
    art: 7,   // 美工
    business_number: 8,   // 商户号
    operation: 9,   // 代运营
    wx_pay: 12,   // 代运营
    wx_pay_operate: 13,   // 代运营
    manage_lease_weapp_account: 15,   // 租赁账号管理
    order_log: 16,   // 租赁账号管理
    products: 17,   // 租赁账号管理
};


let menus;


menus = [
    {
        "label": "Home",
        "url": "/",
        "redirect": "/index"
    },
    {
        "label": "菜单",
        "children": [
            {
                "label": "数据分析",
                "url": "/desk/overview",
                "icon": "fa fa-bar-chart",
                "schema": overview.page
            },

            {
                "label": "用户管理",
                "url": "/member",
                // "rewrite": "/member/list",
                "icon": "fa fa-user",
                "children": [
                    {
                        "label": "用户列表",
                        "url": "/user/list",
                        "icon": "fa fa-list",
                        "role_id": 999,
                        "schema": user_list_conf.page
                    },

                    // {
                    //     "label": "订单日志",
                    //     "url": "/order-log/log",
                    //     "icon": "fa fa-list",
                    //     "role_id": 100,
                    //     "schema": log.page
                    // },

                ]
            }
        ]
    }
];

export default function check(roleStr) {


    // console.log(roleStr, 'join')

    if (roleStr == "") {
        return [];
    }

    let roleArr = explode(",", roleStr);
    let m = menus[1]['children'];
    let l = count(m);

    let newMenu = [];
    for (let i = 0; i < l; i++) {
        let c_l = count(m[i]['children']);
        if (c_l <= 0) {
            // delete m[i];
            continue;
        }

        // 循环菜单查看是否有权限
        for (let c = 0; c < c_l; c++) {
            if (!in_array(m[i]['children'][c]['role_id'], roleArr)) {
                delete m[i]['children'][c];
            }
        }
    }

    // 重新删除空的
    for (let i = 0; i < l; i++) {
        let c_l = count(m[i]['children']);
        if (c_l <= 0) {
            delete m[i];
        }
    }


    let z = [
        {
            "label": "Home",
            "url": "/",
            "redirect": "/index"
        },
        {
            "label": "菜单",
            "children":    array_merge([
                {
                    "label": "总览",
                    "url": "/index",
                    "icon": "fa fa-bar-chart",
                    "schema": overview.page
                }
            ], m)
        }
    ];
    return z;
}


