# Generated by Django 3.2.16 on 2022-10-25 17:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0006_alter_country_flag'),
    ]

    operations = [
        migrations.AlterField(
            model_name='country',
            name='flag',
            field=models.CharField(max_length=50),
        ),
    ]
