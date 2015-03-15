/**
 * Created by dx.yang on 15/3/9.
 */
angular.module('macchiato')
    .service('macchiato.ipService', function () {
        var self = this;
        //IP转成无符号数值
        self.IP2Num = function (ip) {
            ip = ip.split(".");
            var num = ip[0] * 256 * 256 * 256 + ip[1] * 256 * 256 + ip[2] * 256 + ip[3] * 1;
            num = num >>> 0;
            return num;
        };

        //无符号转成IP地址
        self.Num2IP = function (num) {
            var tt = [];
            tt[0] = (num >>> 24) >>> 0;
            tt[1] = ((num << 8) >>> 24) >>> 0;
            tt[2] = (num << 16) >>> 24;
            tt[3] = (num << 24) >>> 24;
            var str = tt[0] + "." + tt[1] + "." + tt[2] + "." + tt[3];
            return str;
        };

        // eg: 127.0.0.1 - 127.0.0.14 => 127.0.0.1/8
        self.calcNeeded = function (value) {
            var tmpvar = parseInt(value, 10);

            if (isNaN(tmpvar) || tmpvar > 0xfffffffe || tmpvar < 1) {
                return '';
            }
            var expval = parseInt(Math.log(tmpvar) / Math.log(2)) + 1;
            var maxaddrval = Math.pow(2, expval);
            if (maxaddrval - tmpvar < 2) {
                expval += 1;
            }
            //cform.maxaddr.value= Math.pow(2,expval) - 2;
            //cform.bits.value=32 - expval;
            return 32 - expval;
            //calcNWmask(cform);
        }
    });
