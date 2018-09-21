<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>大家好：${PROJECT_NAME}发布了一个测试版本v${targetVersion}</title>

    <style>
        body {
            background-color: #f6f6f6;
            padding: 20px;
            margin: 0;
            font-family: "Microsoft Yahei";
        }

        tr,td {
            padding: 0;
        }

        ul {
            padding: 0;
            padding-left: 20px;
        }

        body li {
            padding: 4px 2px;
            margin: 0;
        }
        .gap td {
            padding-bottom: 20px;
        }
        strong, .strong {
            font-weight: 800;
            color: green;
            padding-right: 8px;
        }

        hr {
            height: 2px;
            width: 100%;
        }

        table {
            font-size: 12pt; font-family: Tahoma, Arial, Helvetica, sans-serif;
            width: 95%;
            padding: 0;
        }

        .jira {
            padding-bottom: 20px;
        }

        .jira th {
            padding: 12px 8px;
            background-color: #ebf2f9;
        }

        .jira tr {
            border: solid 1px #ccc;
            border-collapse: collapse;
        }

        .jira tr td {
            padding: 8px;
        }

    </style>
</head>

<body>
    <table cellpadding="0" cellspacing="0">
        <tr class="gap">
            <td>
                大家好
            </td>
        </tr>
        <tr class="gap">
            <td>${PROJECT_NAME}发布了一个测试版本  <strong>v${targetVersion}</strong>-#${BUILD_NUMBER}，请部署</td>
        </tr>
        <tr class="gap">
            <td>
                详情见： /版本库/${PROJECT_NAME}/${targetVersion}/${targetVersion}.${BUILD_NUMBER}
            </td>
        </tr>

        <tr><td>
            <h3 class="strong">相关的jira单信息: </h3><hr/>
            <table class="jira" cellpadding="0" cellspacing="0">
                <tr><th>单号</th><th>描述</th><th>类型</th><th>结果</th><th>解决版本</th><th>经办人</th><th>报告人</th><th>优先级</th><th>状态</th></tr>
                ${jiraContent}
            </table>
        </td></tr>
        <tr>
        <td>
            <h3 class="strong">需要执行的脚本: </h3><hr/>
            ${scriptsContent}
        </td>
        </tr>
        <tr>
            <td><strong>历史变更记录 : </strong><a href="${PROJECT_URL}changes">${PROJECT_URL}changes</a>
                <hr/></td>
        </tr>
        <tr>
            <td> 
                ${CHANGES_SINCE_LAST_SUCCESS, reverse=true, format="Changes for Build #%n:<br />%c<br />",showPaths=true,changesFormat="<pre>[%a]<br />%m</pre>",pathFormat=" %p"}
            </td>
        </tr>
        <tr>
            <td>
                <strong>构建结果 - ${BUILD_STATUS}</strong>
            </td>
        </tr>
        <tr>
            <td><br />
                <b><strong>构建信息</strong></b>
                <hr/>
            </td>
        </tr>
        <tr>
            <td>
                <ul>
                    <li>项目名称： ${PROJECT_NAME}</li>
                    <li>构建编号： 第${BUILD_NUMBER}次构建</li>
                    <li>触发原因： ${CAUSE}</li>
                    <li>构建时长： ${duration}</li>
                    <li>构建日志： <a href="${BUILD_URL}console">${BUILD_URL}console</a></li>
                    <li>构建地址： <a href="${BUILD_URL}">${BUILD_URL}</a></li>
                    <li>工作目录： <a href="${PROJECT_URL}ws">${PROJECT_URL}ws</a></li>
                    <li>项目地址： <a href="${PROJECT_URL}">${PROJECT_URL}</a></li>
                </ul>
            </td>
        </tr>

        <tr>
            <td><strong>构建日志 (最后 100行):</strong>
                <hr/>
            </td>
        </tr>
        <tr>
            <td><textarea cols="80" rows="30" readonly="readonly" style="font-family: Courier New">${BUILD_LOG, maxLines=100}</textarea>
            </td>
        </tr>
    </table>
</body>

</html>