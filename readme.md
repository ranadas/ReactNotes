read the wiki for steps

configuring eslint
1. https://www.robinwieruch.de/react-eslint-webpack-babel/
2. http://eslint.org/docs/user-guide/configuring

https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
### Notes on Rule Options

This rule can take one argument to ignore some specific props during validation.

```json
"prop-types": [<enabled>, { ignore: <ignore>, customValidators: <customValidator> }]
```
<code>enabled</code>: for enabling the rule. 0=off, 1=warn, 2=error. Defaults to 0.
<br/>
<code>ignore</code>: optional array of props name to ignore during validation.
<br/>
<code>customValidators</code>: optional array of validators used for propTypes validation.
<br/>
<code>skipUndeclared</code>: only error on components that have a propTypes block declared