from django import forms

# Form to add user bio information
class bio_form(forms.Form):
    about_me = forms.CharField()
    interests = forms.CharField()
    goals = forms.CharField()

# Form to add user education information
class education_form(forms.Form):
    school = forms.CharField()
    field_study = forms.CharField()
    degree = forms.EmailField()
    description = forms.BooleanField()

# Form to add user work information
class work_form(forms.Form):
    company = forms.CharField()
    title = forms.CharField()
    work_first = forms.DateField()
    work_second = forms.DateField()
    work_here = forms.BooleanField()
    description = forms.CharField()

# Form to change username
class change_username_form(forms.Form):
    # TODO: Research ^^
    pass

# Form to change password
class change_password_form(forms.Form):
    # TODO: Research ^^
    pass

# Form to change email
class change_email_form(forms.Form):
    # TODO: Research ^^
    pass
