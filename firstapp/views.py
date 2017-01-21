from django.shortcuts import render

# Create your views here.
def index(request):
	print "hihihihhih"
	return render(request, "homepage.html", {})