from erpnext.selling.doctype.sales_order.sales_order import SalesOrder
import frappe
from frappe.utils import date_diff, getdate



class CustomSalesOrder(SalesOrder):

    def run_before_save_methods(self):
        super().run_before_save_methods()
        now = getdate()
        diff = date_diff(self.delivery_date,now)
        self.days_till_delivery = diff
        frappe.msgprint(f'{diff}')