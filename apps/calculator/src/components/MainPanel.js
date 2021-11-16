import React from 'zarkit/react';
import '@material/mwc-button';

function MailPanel() {
    return (
        <div id='main-panel'>
            <mwc-button class="function" id="open-parenthesis" label="(" value="()" monitor-value="()" raised></mwc-button>
            <mwc-button id="close-parenthesis" label=")" raised></mwc-button>
            <mwc-button class="operator" id="percentage" label="%" value="%" monitor-value="%" raised></mwc-button>
            <mwc-button class="operation" id="ce" label="CE" raised></mwc-button>

            <mwc-button class="operand" id="seven" label="7" value="7" monitor-value="7" raised></mwc-button>
            <mwc-button class="operand" id="eight" label="8" value="8" monitor-value="8" raised></mwc-button>
            <mwc-button class="operand" id="nine" label="9" value="9" monitor-value="9" raised></mwc-button>
            <mwc-button class="operator" id="divide" label="÷" value="/" monitor-value="÷" raised></mwc-button>

            <mwc-button class="operand" id="four" label="4" value="4" monitor-value="4" raised></mwc-button>
            <mwc-button class="operand" id="five" label="5" value="5" monitor-value="5" raised></mwc-button>
            <mwc-button class="operand" id="six" label="6" value="6" monitor-value="6" raised></mwc-button>
            <mwc-button class="operator" id="multiply" label="×" value="*" monitor-value="×" raised></mwc-button>

            <mwc-button class="operand" id="one" label="1" value="1" monitor-value="1" raised></mwc-button>
            <mwc-button class="operand" id="two" label="2" value="2" monitor-value="2" raised></mwc-button>
            <mwc-button class="operand" id="three" label="3" value="3" monitor-value="3" raised></mwc-button>
            <mwc-button class="operator" id="minus" label="-" value="-" monitor-value="-" raised></mwc-button>

            <mwc-button class="operand" id="zero" label="0" value="0" monitor-value="0" raised></mwc-button>
            <mwc-button class="operand" id="point" label="." value="." monitor-value="." raised></mwc-button>
            <mwc-button id="equals" label="=" raised></mwc-button>
            <mwc-button class="operator" id="plus" label="+" value="+" monitor-value="+" raised></mwc-button>
        </div>
    );
}

export default MailPanel;