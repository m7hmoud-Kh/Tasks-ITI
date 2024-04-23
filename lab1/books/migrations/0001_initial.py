# Generated by Django 4.0 on 2024-04-22 13:37

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Book',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=200)),
                ('publish_date', models.DateTimeField(auto_now_add=True)),
                ('image', models.CharField(blank=True, max_length=100)),
                ('latest_version', models.IntegerField(default=1)),
                ('latest_version_date', models.DateTimeField(auto_now=True)),
            ],
        ),
    ]
