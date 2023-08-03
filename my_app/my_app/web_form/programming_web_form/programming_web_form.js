frappe.ready(function() {
	
	
	frappe.web_form.after_load = after_load_listener()
	frappe.web_form.validate = () => {
		return false;
	}
})
const after_load_listener = function() {
	frappe.web_form.on("model",(field, value)=>{
		if(value){
			model = new Date(value).getFullYear();
			var today = new Date().getFullYear();
			var used_year =  Math.floor((today - model));
			frappe.web_form.set_value("used_year",used_year)
		}
	})

  };