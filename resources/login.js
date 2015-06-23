/**
 * Created by she on 15-6-23.
 */
Ext.onReady(function () {
    createFormPanel();
});

function createFormPanel() {
    Ext.create('Ext.form.Panel', {
        title: '后台登录',
        textAlign: 'center',
        renderTo: Ext.get('container'),
        bodyPadding: 5,
        width: 350,
        height: 200,
        url: '../../app/login.php',
        items: [
            {
                xtype: 'textfield',
                fieldLabel: '账号',
                name: 'account',
                style: {'marginTop': '20', 'width': '200', 'padding': '30'}
            },
            {
                xtype: 'textfield',
                fieldLabel: '密码',
                name: 'password',
                inputType: 'password',
                style: {'marginTop': '20', 'width': '200', 'padding': '30'}
            }
        ],

        buttons: [
            {
                text: '登录',
                method:'post',
                handler: function () {
                    // The getForm() method returns the Ext.form.Basic instance:
                    var form = this.up('form').getForm();
                    if (form.isValid()) {
                        // Submit the Ajax request and handle the response
                        form.submit({
                            success: function (form, action) {
                                //Ext.Msg.alert('Message', action.result.message);
                                window.location.href='../../index.php';
                            },
                            failure: function (form, action) {
                                Ext.Msg.alert('Message', action.result.message);
                            }
                        });
                    }
                }
            }
        ]
    });
}
