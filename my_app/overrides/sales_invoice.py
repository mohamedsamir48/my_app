import frappe
from erpnext.accounts.doctype.sales_invoice.sales_invoice import SalesInvoice



class SalesInvoice(SalesInvoice):

    def before_save(self):
        super().before_save()
       
        frappe.msgprint(f'Hello from override')


