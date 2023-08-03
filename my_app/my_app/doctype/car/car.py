# Copyright (c) 2023, mohamed and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class Car(Document):
	def validate(self):
		pass
	def before_save(self):
		pass
	def after_save(self):
		pass
	def before_sumbit(self):
		pass
	def after_sumbit(self):
		pass
	def on_sumbit(self):
		pass
	def on_update(self):
		pass
	def on_cancel(self):
		pass
	def on_trash(self):
		pass
	def after_delete(self):
		frappe.msgprint("Hello from after delete event")
