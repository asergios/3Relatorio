import os.path
import cherrypy
import json
import urllib2
from xml.dom import minidom

class Service(object):
	@cherrypy.expose
	def index(self):
		return open('index.html')
		
	
	@cherrypy.expose	
	def get_rate(self, currency):
		xml = urllib2.urlopen('http://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml')
		dom = minidom.parse(xml)
		xml.close()
		cube = dom.getElementsByTagName('Cube')
		cube1 = cube[0].getElementsByTagName('Cube')
		cube_final = cube1[0].getElementsByTagName('Cube')
	
		for i in range (0, 31):
			if (cube_final[i].attributes['currency'].value == currency):
				return cube_final[i].attributes['rate'].value
			
		return 1
	
	@cherrypy.expose
	def get_rates(self, currency_from=None, currency_to=None):
		r1 = self.get_rate(currency_from)
		r2 = self.get_rate(currency_to)
		resposta = { "currency_from": currency_from, "currency_to": currency_to, "val1" : r1, "val2" : r2}
		return json.dumps(resposta)
		
	@cherrypy.expose
	def convert(self):
		return open("converter.js").read()
		
	@cherrypy.expose
	def js(self):
		return open('js.js').read()
		
	@cherrypy.expose
	def css(self):
		return open('css.css').read()
		
cherrypy.tree.mount(Service(), '/')
cherrypy.server.start()
