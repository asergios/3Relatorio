import os.path
import cherrypy

class Service(object):
	@cherrypy.expose
	def index(self):
		return open('index.html')
		
	@cherrypy.expose
	def convert(self, value=None, from1=None, to=None):
		return open('index.html')
		
cherrypy.tree.mount(Service(), '/')
cherrypy.server.start()
