import './php.js';

import {isset} from "./php.js";
import url from "../config/urlPath.js"

loginOut();

function loginOut() {
    localStorage.removeItem('kf_session_id');
    localStorage.removeItem('kf_user_role');
    localStorage.removeItem('kf_user_mobile');
    localStorage.removeItem('kf_user_name');
    localStorage.removeItem('kf_user_code');
}


$("#login").click(function () {


    var user_pwd = $("input[name=user_pwd]").val();
    var user_mobile = $("input[name=user_mobile]").val();


    if (user_mobile === '') {

        $("#pal_mobile ").addClass("_18rOxMvoCrgwnfoNwDHbKw _1kvicckEB0VDjxEQ_OhvAP _1xwbCO3akxJdBNQFB8SkVj")
        $(".mobile_remark").show();

        $("#input_mobile").html('请输入手机号')

        return;
    }

    if (user_pwd === '') {
        if (user_mobile !== '') {
            $("#pal_mobile ").removeClass()
            $("#pal_mobile ").addClass("_18rOxMvoCrgwnfoNwDHbKw _1xwbCO3akxJdBNQFB8SkVj")

            $(".mobile_remark").hide();
        }


        $("#input_pwd").html('请输入密码')


        $("#pal_pwd ").addClass("_18rOxMvoCrgwnfoNwDHbKw _1kvicckEB0VDjxEQ_OhvAP _1xwbCO3akxJdBNQFB8SkVj")
        $(".pwd_remark").show();

        return;
    }

    $(".loading2").show();


    axios.post(url.login,
        {
            user_mobile: user_mobile,
            user_pwd: user_pwd,
        })
        .then(function (rs) {
            $(".loading2").hide();

            let res = rs.data;
            console.log(res)

            if (!isset(res.code) || res.code > 0) {
                $("#input_pwd").html(res.msg)

                $("#input_mobile").html('')

                $("#pal_pwd ").addClass("_18rOxMvoCrgwnfoNwDHbKw _1kvicckEB0VDjxEQ_OhvAP _1xwbCO3akxJdBNQFB8SkVj")
                $(".pwd_remark").show();

                $("#pal_mobile ").addClass("_18rOxMvoCrgwnfoNwDHbKw _1kvicckEB0VDjxEQ_OhvAP _1xwbCO3akxJdBNQFB8SkVj")
                $(".mobile_remark").show();

                return;
            }

            let storeLoginInfo = {
                user_mobile: res.data.user_mobile,
                session_id: res.data.session_id,
                user_name: res.data.user_name,
                user_role: res.data.user_role,
                user_code: res.data.user_code,
            }

            ls.set('56382cc1', storeLoginInfo);
            location.href = "index.html"

        })
        .catch(function (e) {
            $(".loading2").hide();

            $.toptip('网络错误', 'error')

        });

})

