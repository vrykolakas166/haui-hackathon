# -*- coding: utf-8 -*-
# Generated by Django 1.11.29 on 2020-07-16 18:50
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('web', '0001_initial'),
        ('teams', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='team',
            name='competition',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='web.Competition'),
        ),
        migrations.AddField(
            model_name='team',
            name='creator',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='team_creator', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='team',
            name='members',
            field=models.ManyToManyField(blank=True, null=True, related_name='teams', through='teams.TeamMembership', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='team',
            name='status',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='teams.TeamStatus'),
        ),
        migrations.AlterUniqueTogether(
            name='team',
            unique_together=set([('name', 'competition')]),
        ),
    ]
