/**
 * 简易上传组件
 * Created by Dio on 2017年7月4日10:26:11
 * 
 *    up.doSend(file, uploadUrl, function (e) {
            if (e.state == "SUCCESS") {
                addArea.areaPic = e.url;
            } else {
                dialog.tipDialog(e.url);
            }
        })
 * 
 * 
 */
"use strict";
(function(root, factory) {
  if (typeof define === "function" && (define.amd || define.cmd)) {
    define(factory);
  } else {
    root.app = root.app || {};
    root.app = factory();
  }
})(this, function() {
  var DOC = document;

  function getEle(ele) {
    return DOC.querySelector(ele);
  }

  var Upload = (function() {
    // 上传方法
    var action = "post";

    // 上传URL
    var target;

    // 文件
    var files;

    // 每次上传文件的一段，单位：字节
    var preUploadSize = 1024 * 2;

    // 文件的起始上传位置
    var start = 0;
    // 上传暂停
    var pause = false;
    // 新建 XHR
    var xhr = new XMLHttpRequest();

    //  上传进度
    xhr.upload.onprogress = function(e) {
      console.dir(e);
      // showprogress(start + e.loaded, file.size)
    };

    var formData = new FormData();

    return {
      /**
       * 初始化方法
       */
      init: function(id) {
        console.log(getEle("#" + id));
      },
      /**
       * 上传方法
       */
      doSend: function(file, url, fun) {
        formData.append("name", encodeURIComponent(file.name));
        // 一次性发送整个文件给服务端
        formData.append("file1", file);
        xhr.open(action, url);
        xhr.onloadstart = function(e) {
          console.log("上传开始");
        };
        xhr.onloadend = function(e) {
          formData = new FormData();
          // 上传后清理数据
          formData = new FormData();

          // console.log(e)
          if (e.currentTarget.status == 200) {
            return fun && fun(JSON.parse(e.currentTarget.responseText));
          } else {
            alert("上传失败");
          }
        };
        xhr.send(formData);
      },

      multipleSend: function(fileA, url, fun) {
        formData.append("templateName", "fsdfsaf");
        formData.append("stime", "2017-07-06 15:56:38");
        formData.append("etime", "2017-08-06 15:56:38");
        // formData.append("name", encodeURIComponent(file.name))
        // 一次性发送整个文件给服务端

        for (var i = 0; i < fileA.length; i++) {
          var file = fileA[i];
          formData.append("icons", file, file.name);
        }

        xhr.open(action, url);
        xhr.onloadstart = function(e) {
          console.log("上传开始");
        };
        xhr.onloadend = function(e) {
          // console.log(e)
          if (e.currentTarget.status == 200) {
            return fun && fun(JSON.parse(e.currentTarget.responseText));
          } else {
            alert("上传失败");
          }
        };
        xhr.send(formData);
      }
    };
  })();
  return Upload;
});
