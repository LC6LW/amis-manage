
import url from "../../config/urlPath.js"

let page;

page = [
    {
        "type": "panel",
        // "title": "数据统计",
        "body": [
            {
                "type": "form",
                "title": "过滤条件",
                "target": "chart1,chart2",
                "submitOnInit": true,
                "className": "m-b",
                "wrapWithPanel": false,
                "mode": "inline",
                "controls": [
                    {
                        "type": "date",
                        "label": "开始日期",
                        "name": "starttime",
                        "value": "-7days",
                        "format" :"YYYY-MM-DD",
                        "maxDate": "${endtime}"
                    },
                    {
                        "type": "date",
                        "label": "结束日期",
                        "name": "endtime",
                        "value": "-1days",
                        "format" :"YYYY-MM-DD",
                        "minDate": "${starttime}"
                    },
                    {
                        "type": "submit",
                        "label": "搜索",
                        "level": "primary"
                    }
                ],
                "actions": []
            },
            // {
            //     "type": "divider"
            // },

            // {
            //     "type": "grid",
            //     // "className": "bg-info",
            //     "columns": [
            //         {
            //             "type": "plain",
            //             "text": "　　开卡总量 ：  30",
            //             "mdOffset": 4,
            //             "lgPull": 4,
            //             "xs":13,
            //             "mdPull":5,
            //         },
            //
            //     ]
            // },
            {
                "type": "divider"
            },

            {
                "type": "grid",
                "className": "m-t-lg",
                "initFetch": false,
                "columns": [

                    {
                        "type": "chart",
                        "name": "chart1",
                        "initFetch": false,
                        // "api": url.chatCard+"?name=$name&starttime=${starttime}&endtime=${endtime}"
                    },

                ]
            },
            // {
            //     "type": "divider"
            // },
            // {
            //     "type": "grid",
            //     // "className": "bg-success",
            //     "level": "success",
            //
            //     "columns": [
            //
            //         {
            //             "type": "plain",
            //             "text": "　　总收入 ：  ￥30",
            //
            //             "mdOffset": 30,
            //             "xs":13,
            //         }
            //     ]
            // },
            {
                "type": "divider"
            },
            {
                "type": "grid",
                "className": "m-t-lg",
                "columns": [

                    {
                        "type": "chart",
                        "name": "chart2",
                        "initFetch": false,
                        // "api": url.income+"?name=$name&starttime=${starttime}&endtime=${endtime}"
                    }
                ]
            }
        ]
    }
]


const  chat = {
    "page" : page
}

export default chat
