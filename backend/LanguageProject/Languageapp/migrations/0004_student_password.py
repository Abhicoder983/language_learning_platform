# Generated by Django 4.2.7 on 2023-11-17 11:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Languageapp', '0003_student_usernames_student_emails_alter_student_id'),
    ]

    operations = [
        migrations.AddField(
            model_name='student',
            name='password',
            field=models.CharField(default='9837', max_length=50),
        ),
    ]