Ext.define('MyFirstExtDemo.view.main.header.HeaderView', {
	extend: 'Ext.Toolbar',
	xtype: 'headerview',
	cls: 'headerview',
	items: [
		{ 
			xtype: 'container',
			cls: 'headerviewtext',
			bind: { html: '{heading}' }
		},
		'->',
		{
			xtype: 'button',
			ui: 'headerbutton',
			reference: 'detailtoggle',
			handler: 'onHeaderViewDetailToggle',
			iconCls: 'x-fa fa-arrow-left'
		}
	]
});
