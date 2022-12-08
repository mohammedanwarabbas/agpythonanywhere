from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request,'ayush/index.html')

def about(request):
    return render(request,'ayush/about.html')

def services(request):
    return render(request,'ayush/services.html')

def contact(request):
    return render(request,'ayush/contact.html')