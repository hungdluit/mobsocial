﻿using System.Collections.Generic;
using mobSocial.Core.Data;

namespace mobSocial.Data.Entity.Notifications
{
    public class NotificationEvent : BaseEntity
    {
        public string EventName { get; set; }

        public bool Enabled { get; set; }

        public virtual IList<Notification> Notifications { get; set; }
    }

    public class NotificationEventTypeMap: BaseEntityConfiguration<NotificationEvent> { }
}