
 KanbanData = [
     { Id: 1, Status: 'Open', Summary: 'Analyze the new requirements gathered from the customer.', Type: 'Story', Priority: 'Low', Tags: 'Analyze,Customer', Estimate: 3.5, Assignee: 'Laura Callahan', ImgUrl: 'images/kanban/1.png', RankId: 1 },
	 { Id: 2, Status: 'InProgress', Summary: 'Improve application performance', Type: 'Improvement', Priority: 'Normal', Tags: 'Improvement', Estimate: 6, Assignee: 'Andrew Fuller', ImgUrl: 'images/kanban/2.png', RankId: 1 },
	 { Id: 3, Status: 'Open', Summary: 'Arrange a web meeting with the customer to get new requirements.', Type: 'Others', Priority: 'Critical', Tags: 'Meeting', Estimate: 5.5, Assignee: 'Janet Leverling', ImgUrl: 'images/kanban/3.png', RankId: 2 },
	 { Id: 4, Status: 'InProgress', Summary: 'Fix the issues reported in the IE browser.', Type: 'Bug', Priority: 'Release Breaker', Tags: 'IE', Estimate: 2.5, Assignee: 'Janet Leverling', ImgUrl: 'images/kanban/3.png', RankId: 2 },
	 { Id: 5, Status: 'InProgress', Summary: 'Fix the issues reported by the customer.', Type: 'Bug', Priority: 'Low', Tags: 'Customer', Estimate: '3.5', Assignee: 'Andrew Fuller', ImgUrl: 'images/kanban/5.png', RankId: 1 },
	 { Id: 6, Status: 'Close', Summary: 'Arrange a web meeting with the customer to get the login page requirements.', Type: 'Others', Priority: 'Low', Tags: 'Meeting', Estimate: 2, Assignee: 'Laura Callahan', ImgUrl: 'images/kanban/6.png', RankId: 1 },
	 { Id: 7, Status: 'Testing', Summary: 'Validate new requirements', Type: 'Improvement', Priority: 'Low', Tags: 'Validation', Estimate: 1.5, Assignee: 'Andrew Fuller', ImgUrl: 'images/kanban/7.png', RankId: 3 },
	 { Id: 8, Status: 'Close', Summary: 'Login page validation', Type: 'Story', Priority: 'Release Breaker', Tags: 'Validation,Fix', Estimate: 2.5, Assignee: 'Laura Callahan', ImgUrl: 'images/kanban/8.png', RankId: 2 },
	 { Id: 9, Status: 'Testing', Summary: 'Fix the issues reported in Safari browser.', Type: 'Bug', Priority: 'Release Breaker', Tags: 'Fix,Safari', Estimate: 1.5, Assignee: 'Laura Callahan', ImgUrl: 'images/kanban/1.png', RankId: 2 },
	 { Id: 10, Status: 'Close', Summary: 'Test the application in the IE browser.', Type: 'Story', Priority: 'Low', Tags: 'Testing,IE', Estimate: 5.5, Assignee: 'Andrew Fuller', ImgUrl: 'images/kanban/4.png', RankId: 3 }];
 swimlaneKanbanData = $.extend(true, [], KanbanData);
 editKanbanData = $.extend(true, [], KanbanData);
 custKanbanData = $.extend(true, [], KanbanData);
 contextKanbanData = $.extend(true, [], KanbanData);
 filterKanbanData = $.extend(true, [], KanbanData);
 defaultKanbanData = $.extend(true, [], KanbanData);
 tempKanbanData = $.extend(true, [], KanbanData);
 constraintKanbanData = $.extend(true, [], KanbanData);
