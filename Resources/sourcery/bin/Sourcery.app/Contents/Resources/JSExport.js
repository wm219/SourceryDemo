import JavaScriptCore

<%_ for (type of types.implementing.AutoJSExport) { -%>
<%_ if (type.kind != "protocol" && !type.annotations.skipJSExport) { -%>
@objc protocol <%= type.name %>AutoJSExport: JSExport {
    <%_ for (variable of type.allVariables) { -%>
    <%_ if (!variable.annotations.skipJSExport) { -%>
    var <%= variable.name %>: <%= variable.typeName.name %> { get }
    <%_ } -%>
    <%_ } -%>
}

extension <%= type.name %>: <%= type.name %>AutoJSExport {}
<%_ } %>
<%_ } %>
