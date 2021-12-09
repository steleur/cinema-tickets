# Generated by Django 3.2.9 on 2021-12-06 20:04

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Film',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=60)),
                ('price', models.FloatField()),
                ('description', models.TextField()),
                ('picture', models.ImageField(upload_to='')),
                ('duration', models.CharField(max_length=60)),
                ('genre', models.CharField(max_length=60)),
                ('age', models.CharField(max_length=60)),
            ],
        ),
    ]