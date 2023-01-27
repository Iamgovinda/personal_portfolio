from django.http import JsonResponse
from django.shortcuts import render
from django.template.loader import render_to_string


def terms_and_conditions(request):
    template_name = 'policies/terms_and_conditions.html'
    return render(request, template_name)


def privacy_policy(request):
    template_name = 'policies/privacy_policy.html'
    return render(request, template_name)


def tac(request):
    template_name = 'policies/terms_and_conditions.html'
    data = render_to_string(template_name)
    return JsonResponse({'terms_and_condition': data})


def privacy_policies(request):
    template_name = 'policies/privacy_policy.html'
    data = render_to_string(template_name)
    return JsonResponse({'privacy_policy': data})