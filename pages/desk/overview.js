let page;
import url from "../../config/urlPath.js"

page = {
    "type": "page",
    brandName: "总览",
    initApi: url.totalStatistics,
    title: "总览",
    "body":   [
        {
            "type": "hbox",
            "columns": [
                {
                    "type": "flex",
                    "items": [
                        {
                            "style": {
                                "background-image": "linear-gradient(294deg, #a18aff, #a864ff)",

                                "box-shadow": "0 12px 24px 0 rgb(154 139 255 / 50%)",

                                // "backgroundColor": "#fff",
                                "width": "100%",
                                "height": 180,
                                "border-radius": "6px",
                                "margin": 5,
                                "color": "#FFFFFF",
                                // "padding": "20px 40px",
                                "display": "flex",
                                "flex": 1,
                                "position": "relative",
                                " justify-content": "space-between",
                                "margin-right": "1rem",
                            },
                            "type": "tpl",

                            "tpl": "<div class='overview_for_box'>\n" +
                                "    <span class='overview_yes_order_count_title' >昨日订单数</span>\n" +
                                "\n" +
                                "        <div class='overview_yes_order_count'><span>  ${yesterday_order_count}</span></div>\n" +
                                "\n" +
                                "        <div class='overview_box_t'>\n" +
                                "            <span class='overview_growth_rate'>同比昨日 ${growth_rate}</span>\n" +
                                "        </div>\n" +
                                "\n" +
                                "        <div class='overview_box_s cec8da'>\n" +
                                "        <span class='overview_today_order_count'> 今日订单数：  ${today_order_count}</span>\n" +
                                "        </div>\n" +
                                "\n" +
                                "    </div><img data-v-3ac51712=\"\" src=\"../../asset/todo_ticket.fee2f74.png\" alt=\"\" class=\"item-image\"> "
                        },


                    ]
                },

                {
                    "type": "flex",
                    "items": [
                        {
                            "style": {
                                "background-image": "linear-gradient(294deg, #5daaff, #3293FF)",

                                "box-shadow": "0 12px 24px 0 rgb(112 183 255 / 50%)",

                                // "backgroundColor": "#fff",
                                "width": "100%",
                                "height": 180,
                                "border-radius": "6px",
                                "margin": 5,
                                "color": "#FFFFFF",
                                // "padding": "20px 40px",
                                "display": "flex",
                                "flex": 1,
                                "position": "relative",
                                " justify-content": "space-between",
                                "margin-right": "1rem",
                            },
                            "type": "tpl",

                            "tpl": "<div class='overview_for_box'>\n" +
                                "    <span class='overview_yes_order_count_title' >订单累计</span>\n" +
                                "\n" +
                                "        <div class='overview_yes_order_count'><span>  ${total_order_count}</span></div>\n" +
                                "\n" +
                                "        <div class='overview_box_t'>\n" +
                                "            <span class='overview_growth_rate'>累计未处理： ${total_not_processed_order}</span>\n" +
                                "        </div>\n" +
                                "\n" +
                                "        <div class='overview_box_s b0ccea'>\n" +
                                "        <span class='overview_today_order_count'> 累计已处理：  ${total_processed_order}</span>\n" +
                                "        </div>\n" +
                                "\n" +
                                "    </div><img data-v-3ac51712=\"\" src=\"../../asset/todo_order.f979f04.png\" alt=\"\" class=\"item-image\"> "
                        },



                    ]
                },
                {
                    "type": "flex",
                    "items": [
                        {
                            "style": {
                                "background-image": "linear-gradient(293deg, #ff937f, #ff5957)",

                                "box-shadow": "0 12px 24px 0 rgb(255 152 132 / 50%)",

                                // "backgroundColor": "#fff",
                                "width": "100%",
                                "height": 180,
                                "border-radius": "6px",
                                "margin": 5,
                                "color": "#FFFFFF",
                                // "padding": "20px 40px",
                                "display": "flex",
                                "flex": 1,
                                "position": "relative",
                                " justify-content": "space-between",
                                "margin-right": "1rem",
                            },
                            "type": "tpl",

                            "tpl": "<div class='overview_for_box'>\n" +
                                "    <span class='overview_yes_order_count_title' >今日未处理订单数</span>\n" +
                                "\n" +
                                "        <div class='overview_yes_order_count'><span>  ${not_processed}</span></div>\n" +
                                "\n" +
                                "        <div class='overview_box_t'>\n" +
                                "            <span class='overview_growth_rate'>已完成 ${completion_rate}</span>\n" +
                                "        </div>\n" +
                                "\n" +
                                "        <div class='overview_box_s b14c46'>\n" +
                                "        <span class='overview_today_order_count'> 今日已处理：  ${processed}</span>\n" +
                                "        </div>\n" +
                                "\n" +
                                "    </div><img data-v-3ac51712=\"\" src=\"../../asset/todo_monitor.dd6ad34.png\" alt=\"\" class=\"item-image\"> "
                        },



                    ]
                },


            ]
        },

        {
            "type":"divider"
        },
        {
            "type":"form",
            "className":"m-b",
            "title":"过滤条件",
            "target":"chart1,chart2",
            "submitOnInit":true,
            "wrapWithPanel":false,
            "mode":"inline",
            "actions":[

            ],
            "body":[
                {
                    "type":"input-date",
                    "label":"开始日期",
                    "name":"starttime",
                    "value":"-7days",
                    "format":"YYYY-MM-DD",
                    "maxDate":"${endtime}"
                },
                {
                    "type":"input-date",
                    "label":"结束日期",
                    "name":"endtime",
                    "value":"-1days",
                    "format":"YYYY-MM-DD",
                    "minDate":"${starttime}"
                },
                {
                    "type":"control",
                    "label":"",
                    "body":[
                        {
                            "type":"submit",
                            "level":"primary",
                            "label":"搜索"
                        }
                    ]
                }
            ]
        },
        {
            "type":"divider"
        },
        {
            "type":"grid",
            "className":"m-t-lg",
            "columns":[
                {
                    "type":"chart",
                    "name":"chart1",
                    "initFetch":false,
                    "height" :480,
                    "api": url.orderChart+ "?start_time=${starttime}&end_time=${endtime}"
                }
            ],
            "initFetch":false
        },
        {
            "type":"divider"
        },
        // {
        //     "type": "chart",
        //     "config": {
        //         "xAxis": {
        //             "type": "category",
        //             data: [
        //                 { value: 1048, name: 'Search Engine' },
        //                 { value: 735, name: 'Direct' },
        //                 { value: 580, name: 'Email' },
        //                 { value: 484, name: 'Union Ads' },
        //                 { value: 300, name: 'Video Ads' }
        //             ],
        //         },
        //         "yAxis": {
        //             "type": "value"
        //         },
        //         // radius: '50%',
        //
        //         tooltip: {
        //             trigger: 'item'
        //         },
        //         legend: {
        //             orient: 'vertical',
        //             left: 'left'
        //         },
        //         series: [
        //             {
        //                 name: 'Access From',
        //                 type: 'pie',
        //                 radius: '50%',
        //                 data: [
        //                     { value: 1048, name: 'Search Engine' },
        //                     { value: 735, name: 'Direct' },
        //                     { value: 580, name: 'Email' },
        //                     { value: 484, name: 'Union Ads' },
        //                     { value: 300, name: 'Video Ads' }
        //                 ],
        //                 emphasis: {
        //                     itemStyle: {
        //                         shadowBlur: 10,
        //                         shadowOffsetX: 0,
        //                         shadowColor: 'rgba(0, 0, 0, 0.5)'
        //                     }
        //                 }
        //             }
        //         ]
        //     }
        // }

    ],
}

const overview = {
    "page": page
}

export default overview
