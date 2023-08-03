frappe.pages['programming-page'].on_page_load = function(wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: 'Learning',
		single_column: true
	});

	page.set_title('Title Changed')
	page.set_indicator("Test", "green")
 	
	let $btn = page.set_primary_action('New', () => create_new(), 'octicon octicon-plus')
	let $secondyBtn = page.set_secondary_action('Refresh', () =>frappe.msgprint("Clicked Refresh"), 'octicon octicon-sync')
	page.add_menu_item('Send Email', () => frappe.msgprint("Clicked send Emain"),true)
	// page.clear_menu()
	page.add_action_item('Delete', () => delete_items())

	let field = page.add_field({
		label: 'Status',
		fieldtype: 'Select',
		fieldname: 'status',
		options: [
			'Open',
			'Closed',
			'Cancelled'
		],
		change() {
			console.log(field.get_value());
		}
	});
	// Render template programming_page.js
	// $(frappe.render_template("programming_page",{})).appendTo(page.body)

	$(frappe.render_template("demo_page",{data:"Hello frappe"})).appendTo(page.body)

}

