// Auto-generated by Stone, do not modify.
var routes = {};

/**
 * List all device sessions of a team's member.
 * @function DropboxTeam#teamDevicesListMemberDevices
 * @arg {TeamListMemberDevicesArg} arg - The request parameters.
 * @returns {Promise.<TeamListMemberDevicesResult, Error.<TeamListMemberDevicesError>>}
 */
routes.teamDevicesListMemberDevices = function (arg) {
  return this.request('team/devices/list_member_devices', arg, 'team', 'api', 'rpc');
};

/**
 * List all device sessions of a team.
 * @function DropboxTeam#teamDevicesListMembersDevices
 * @arg {TeamListMembersDevicesArg} arg - The request parameters.
 * @returns {Promise.<TeamListMembersDevicesResult, Error.<TeamListMembersDevicesError>>}
 */
routes.teamDevicesListMembersDevices = function (arg) {
  return this.request('team/devices/list_members_devices', arg, 'team', 'api', 'rpc');
};

/**
 * List all device sessions of a team.
 * @function DropboxTeam#teamDevicesListTeamDevices
 * @deprecated
 * @arg {TeamListTeamDevicesArg} arg - The request parameters.
 * @returns {Promise.<TeamListTeamDevicesResult, Error.<TeamListTeamDevicesError>>}
 */
routes.teamDevicesListTeamDevices = function (arg) {
  return this.request('team/devices/list_team_devices', arg, 'team', 'api', 'rpc');
};

/**
 * Revoke a device session of a team's member
 * @function DropboxTeam#teamDevicesRevokeDeviceSession
 * @arg {TeamRevokeDeviceSessionArg} arg - The request parameters.
 * @returns {Promise.<void, Error.<TeamRevokeDeviceSessionError>>}
 */
routes.teamDevicesRevokeDeviceSession = function (arg) {
  return this.request('team/devices/revoke_device_session', arg, 'team', 'api', 'rpc');
};

/**
 * Revoke a list of device sessions of team members
 * @function DropboxTeam#teamDevicesRevokeDeviceSessionBatch
 * @arg {TeamRevokeDeviceSessionBatchArg} arg - The request parameters.
 * @returns {Promise.<TeamRevokeDeviceSessionBatchResult, Error.<TeamRevokeDeviceSessionBatchError>>}
 */
routes.teamDevicesRevokeDeviceSessionBatch = function (arg) {
  return this.request('team/devices/revoke_device_session_batch', arg, 'team', 'api', 'rpc');
};

/**
 * Get the values for one or more featues. This route allows you to check your
 * account's capability for what feature you can access or what value you have
 * for certain features. Permission : Team information.
 * @function DropboxTeam#teamFeaturesGetValues
 * @arg {TeamFeaturesGetValuesBatchArg} arg - The request parameters.
 * @returns {Promise.<TeamFeaturesGetValuesBatchResult, Error.<TeamFeaturesGetValuesBatchError>>}
 */
routes.teamFeaturesGetValues = function (arg) {
  return this.request('team/features/get_values', arg, 'team', 'api', 'rpc');
};

/**
 * Retrieves information about a team.
 * @function DropboxTeam#teamGetInfo
 * @arg {void} arg - The request parameters.
 * @returns {Promise.<TeamTeamGetInfoResult, Error.<void>>}
 */
routes.teamGetInfo = function (arg) {
  return this.request('team/get_info', arg, 'team', 'api', 'rpc');
};

/**
 * Creates a new, empty group, with a requested name. Permission : Team member
 * management.
 * @function DropboxTeam#teamGroupsCreate
 * @arg {TeamGroupCreateArg} arg - The request parameters.
 * @returns {Promise.<TeamGroupFullInfo, Error.<TeamGroupCreateError>>}
 */
routes.teamGroupsCreate = function (arg) {
  return this.request('team/groups/create', arg, 'team', 'api', 'rpc');
};

/**
 * Deletes a group. The group is deleted immediately. However the revoking of
 * group-owned resources may take additional time. Use the groups/job_status/get
 * to determine whether this process has completed. Permission : Team member
 * management.
 * @function DropboxTeam#teamGroupsDelete
 * @arg {TeamGroupSelector} arg - The request parameters.
 * @returns {Promise.<AsyncLaunchEmptyResult, Error.<TeamGroupDeleteError>>}
 */
routes.teamGroupsDelete = function (arg) {
  return this.request('team/groups/delete', arg, 'team', 'api', 'rpc');
};

/**
 * Retrieves information about one or more groups. Note that the optional field
 * GroupFullInfo.members is not returned for system-managed groups. Permission :
 * Team Information.
 * @function DropboxTeam#teamGroupsGetInfo
 * @arg {TeamGroupsSelector} arg - The request parameters.
 * @returns {Promise.<Object, Error.<TeamGroupsGetInfoError>>}
 */
routes.teamGroupsGetInfo = function (arg) {
  return this.request('team/groups/get_info', arg, 'team', 'api', 'rpc');
};

/**
 * Once an async_job_id is returned from groups/delete, groups/members/add , or
 * groups/members/remove use this method to poll the status of granting/revoking
 * group members' access to group-owned resources. Permission : Team member
 * management.
 * @function DropboxTeam#teamGroupsJobStatusGet
 * @arg {AsyncPollArg} arg - The request parameters.
 * @returns {Promise.<AsyncPollEmptyResult, Error.<TeamGroupsPollError>>}
 */
routes.teamGroupsJobStatusGet = function (arg) {
  return this.request('team/groups/job_status/get', arg, 'team', 'api', 'rpc');
};

/**
 * Lists groups on a team. Permission : Team Information.
 * @function DropboxTeam#teamGroupsList
 * @arg {TeamGroupsListArg} arg - The request parameters.
 * @returns {Promise.<TeamGroupsListResult, Error.<void>>}
 */
routes.teamGroupsList = function (arg) {
  return this.request('team/groups/list', arg, 'team', 'api', 'rpc');
};

/**
 * Once a cursor has been retrieved from groups/list, use this to paginate
 * through all groups. Permission : Team Information.
 * @function DropboxTeam#teamGroupsListContinue
 * @arg {TeamGroupsListContinueArg} arg - The request parameters.
 * @returns {Promise.<TeamGroupsListResult, Error.<TeamGroupsListContinueError>>}
 */
routes.teamGroupsListContinue = function (arg) {
  return this.request('team/groups/list/continue', arg, 'team', 'api', 'rpc');
};

/**
 * Adds members to a group. The members are added immediately. However the
 * granting of group-owned resources may take additional time. Use the
 * groups/job_status/get to determine whether this process has completed.
 * Permission : Team member management.
 * @function DropboxTeam#teamGroupsMembersAdd
 * @arg {TeamGroupMembersAddArg} arg - The request parameters.
 * @returns {Promise.<TeamGroupMembersChangeResult, Error.<TeamGroupMembersAddError>>}
 */
routes.teamGroupsMembersAdd = function (arg) {
  return this.request('team/groups/members/add', arg, 'team', 'api', 'rpc');
};

/**
 * Lists members of a group. Permission : Team Information.
 * @function DropboxTeam#teamGroupsMembersList
 * @arg {TeamGroupsMembersListArg} arg - The request parameters.
 * @returns {Promise.<TeamGroupsMembersListResult, Error.<TeamGroupSelectorError>>}
 */
routes.teamGroupsMembersList = function (arg) {
  return this.request('team/groups/members/list', arg, 'team', 'api', 'rpc');
};

/**
 * Once a cursor has been retrieved from groups/members/list, use this to
 * paginate through all members of the group. Permission : Team information.
 * @function DropboxTeam#teamGroupsMembersListContinue
 * @arg {TeamGroupsMembersListContinueArg} arg - The request parameters.
 * @returns {Promise.<TeamGroupsMembersListResult, Error.<TeamGroupsMembersListContinueError>>}
 */
routes.teamGroupsMembersListContinue = function (arg) {
  return this.request('team/groups/members/list/continue', arg, 'team', 'api', 'rpc');
};

/**
 * Removes members from a group. The members are removed immediately. However
 * the revoking of group-owned resources may take additional time. Use the
 * groups/job_status/get to determine whether this process has completed. This
 * method permits removing the only owner of a group, even in cases where this
 * is not possible via the web client. Permission : Team member management.
 * @function DropboxTeam#teamGroupsMembersRemove
 * @arg {TeamGroupMembersRemoveArg} arg - The request parameters.
 * @returns {Promise.<TeamGroupMembersChangeResult, Error.<TeamGroupMembersRemoveError>>}
 */
routes.teamGroupsMembersRemove = function (arg) {
  return this.request('team/groups/members/remove', arg, 'team', 'api', 'rpc');
};

/**
 * Sets a member's access type in a group. Permission : Team member management.
 * @function DropboxTeam#teamGroupsMembersSetAccessType
 * @arg {TeamGroupMembersSetAccessTypeArg} arg - The request parameters.
 * @returns {Promise.<Object, Error.<TeamGroupMemberSetAccessTypeError>>}
 */
routes.teamGroupsMembersSetAccessType = function (arg) {
  return this.request('team/groups/members/set_access_type', arg, 'team', 'api', 'rpc');
};

/**
 * Updates a group's name and/or external ID. Permission : Team member
 * management.
 * @function DropboxTeam#teamGroupsUpdate
 * @arg {TeamGroupUpdateArgs} arg - The request parameters.
 * @returns {Promise.<TeamGroupFullInfo, Error.<TeamGroupUpdateError>>}
 */
routes.teamGroupsUpdate = function (arg) {
  return this.request('team/groups/update', arg, 'team', 'api', 'rpc');
};

/**
 * List all linked applications of the team member. Note, this endpoint does not
 * list any team-linked applications.
 * @function DropboxTeam#teamLinkedAppsListMemberLinkedApps
 * @arg {TeamListMemberAppsArg} arg - The request parameters.
 * @returns {Promise.<TeamListMemberAppsResult, Error.<TeamListMemberAppsError>>}
 */
routes.teamLinkedAppsListMemberLinkedApps = function (arg) {
  return this.request('team/linked_apps/list_member_linked_apps', arg, 'team', 'api', 'rpc');
};

/**
 * List all applications linked to the team members' accounts. Note, this
 * endpoint does not list any team-linked applications.
 * @function DropboxTeam#teamLinkedAppsListMembersLinkedApps
 * @arg {TeamListMembersAppsArg} arg - The request parameters.
 * @returns {Promise.<TeamListMembersAppsResult, Error.<TeamListMembersAppsError>>}
 */
routes.teamLinkedAppsListMembersLinkedApps = function (arg) {
  return this.request('team/linked_apps/list_members_linked_apps', arg, 'team', 'api', 'rpc');
};

/**
 * List all applications linked to the team members' accounts. Note, this
 * endpoint doesn't list any team-linked applications.
 * @function DropboxTeam#teamLinkedAppsListTeamLinkedApps
 * @deprecated
 * @arg {TeamListTeamAppsArg} arg - The request parameters.
 * @returns {Promise.<TeamListTeamAppsResult, Error.<TeamListTeamAppsError>>}
 */
routes.teamLinkedAppsListTeamLinkedApps = function (arg) {
  return this.request('team/linked_apps/list_team_linked_apps', arg, 'team', 'api', 'rpc');
};

/**
 * Revoke a linked application of the team member
 * @function DropboxTeam#teamLinkedAppsRevokeLinkedApp
 * @arg {TeamRevokeLinkedApiAppArg} arg - The request parameters.
 * @returns {Promise.<void, Error.<TeamRevokeLinkedAppError>>}
 */
routes.teamLinkedAppsRevokeLinkedApp = function (arg) {
  return this.request('team/linked_apps/revoke_linked_app', arg, 'team', 'api', 'rpc');
};

/**
 * Revoke a list of linked applications of the team members
 * @function DropboxTeam#teamLinkedAppsRevokeLinkedAppBatch
 * @arg {TeamRevokeLinkedApiAppBatchArg} arg - The request parameters.
 * @returns {Promise.<TeamRevokeLinkedAppBatchResult, Error.<TeamRevokeLinkedAppBatchError>>}
 */
routes.teamLinkedAppsRevokeLinkedAppBatch = function (arg) {
  return this.request('team/linked_apps/revoke_linked_app_batch', arg, 'team', 'api', 'rpc');
};

/**
 * Adds members to a team. Permission : Team member management A maximum of 20
 * members can be specified in a single call. If no Dropbox account exists with
 * the email address specified, a new Dropbox account will be created with the
 * given email address, and that account will be invited to the team. If a
 * personal Dropbox account exists with the email address specified in the call,
 * this call will create a placeholder Dropbox account for the user on the team
 * and send an email inviting the user to migrate their existing personal
 * account onto the team. Team member management apps are required to set an
 * initial given_name and surname for a user to use in the team invitation and
 * for 'Perform as team member' actions taken on the user before they become
 * 'active'.
 * @function DropboxTeam#teamMembersAdd
 * @arg {TeamMembersAddArg} arg - The request parameters.
 * @returns {Promise.<TeamMembersAddLaunch, Error.<void>>}
 */
routes.teamMembersAdd = function (arg) {
  return this.request('team/members/add', arg, 'team', 'api', 'rpc');
};

/**
 * Once an async_job_id is returned from members/add , use this to poll the
 * status of the asynchronous request. Permission : Team member management
 * @function DropboxTeam#teamMembersAddJobStatusGet
 * @arg {AsyncPollArg} arg - The request parameters.
 * @returns {Promise.<TeamMembersAddJobStatus, Error.<AsyncPollError>>}
 */
routes.teamMembersAddJobStatusGet = function (arg) {
  return this.request('team/members/add/job_status/get', arg, 'team', 'api', 'rpc');
};

/**
 * Returns information about multiple team members. Permission : Team
 * information This endpoint will return MembersGetInfoItem.id_not_found, for
 * IDs (or emails) that cannot be matched to a valid team member.
 * @function DropboxTeam#teamMembersGetInfo
 * @arg {TeamMembersGetInfoArgs} arg - The request parameters.
 * @returns {Promise.<Object, Error.<TeamMembersGetInfoError>>}
 */
routes.teamMembersGetInfo = function (arg) {
  return this.request('team/members/get_info', arg, 'team', 'api', 'rpc');
};

/**
 * Lists members of a team. Permission : Team information
 * @function DropboxTeam#teamMembersList
 * @arg {TeamMembersListArg} arg - The request parameters.
 * @returns {Promise.<TeamMembersListResult, Error.<TeamMembersListError>>}
 */
routes.teamMembersList = function (arg) {
  return this.request('team/members/list', arg, 'team', 'api', 'rpc');
};

/**
 * Once a cursor has been retrieved from members/list, use this to paginate
 * through all team members. Permission : Team information
 * @function DropboxTeam#teamMembersListContinue
 * @arg {TeamMembersListContinueArg} arg - The request parameters.
 * @returns {Promise.<TeamMembersListResult, Error.<TeamMembersListContinueError>>}
 */
routes.teamMembersListContinue = function (arg) {
  return this.request('team/members/list/continue', arg, 'team', 'api', 'rpc');
};

/**
 * Recover a deleted member. Permission : Team member management Exactly one of
 * team_member_id, email, or external_id must be provided to identify the user
 * account.
 * @function DropboxTeam#teamMembersRecover
 * @arg {TeamMembersRecoverArg} arg - The request parameters.
 * @returns {Promise.<void, Error.<TeamMembersRecoverError>>}
 */
routes.teamMembersRecover = function (arg) {
  return this.request('team/members/recover', arg, 'team', 'api', 'rpc');
};

/**
 * Removes a member from a team. Permission : Team member management Exactly one
 * of team_member_id, email, or external_id must be provided to identify the
 * user account. Accounts can be recovered via members/recover for a 7 day
 * period or until the account has been permanently deleted or transferred to
 * another account (whichever comes first). Calling members/add while a user is
 * still recoverable on your team will return with
 * MemberAddResult.user_already_on_team. This endpoint may initiate an
 * asynchronous job. To obtain the final result of the job, the client should
 * periodically poll members/remove/job_status/get.
 * @function DropboxTeam#teamMembersRemove
 * @arg {TeamMembersRemoveArg} arg - The request parameters.
 * @returns {Promise.<AsyncLaunchEmptyResult, Error.<TeamMembersRemoveError>>}
 */
routes.teamMembersRemove = function (arg) {
  return this.request('team/members/remove', arg, 'team', 'api', 'rpc');
};

/**
 * Once an async_job_id is returned from members/remove , use this to poll the
 * status of the asynchronous request. Permission : Team member management
 * @function DropboxTeam#teamMembersRemoveJobStatusGet
 * @arg {AsyncPollArg} arg - The request parameters.
 * @returns {Promise.<AsyncPollEmptyResult, Error.<AsyncPollError>>}
 */
routes.teamMembersRemoveJobStatusGet = function (arg) {
  return this.request('team/members/remove/job_status/get', arg, 'team', 'api', 'rpc');
};

/**
 * Sends welcome email to pending team member. Permission : Team member
 * management Exactly one of team_member_id, email, or external_id must be
 * provided to identify the user account. No-op if team member is not pending.
 * @function DropboxTeam#teamMembersSendWelcomeEmail
 * @arg {TeamUserSelectorArg} arg - The request parameters.
 * @returns {Promise.<void, Error.<TeamMembersSendWelcomeError>>}
 */
routes.teamMembersSendWelcomeEmail = function (arg) {
  return this.request('team/members/send_welcome_email', arg, 'team', 'api', 'rpc');
};

/**
 * Updates a team member's permissions. Permission : Team member management
 * @function DropboxTeam#teamMembersSetAdminPermissions
 * @arg {TeamMembersSetPermissionsArg} arg - The request parameters.
 * @returns {Promise.<TeamMembersSetPermissionsResult, Error.<TeamMembersSetPermissionsError>>}
 */
routes.teamMembersSetAdminPermissions = function (arg) {
  return this.request('team/members/set_admin_permissions', arg, 'team', 'api', 'rpc');
};

/**
 * Updates a team member's profile. Permission : Team member management
 * @function DropboxTeam#teamMembersSetProfile
 * @arg {TeamMembersSetProfileArg} arg - The request parameters.
 * @returns {Promise.<TeamTeamMemberInfo, Error.<TeamMembersSetProfileError>>}
 */
routes.teamMembersSetProfile = function (arg) {
  return this.request('team/members/set_profile', arg, 'team', 'api', 'rpc');
};

/**
 * Suspend a member from a team. Permission : Team member management Exactly one
 * of team_member_id, email, or external_id must be provided to identify the
 * user account.
 * @function DropboxTeam#teamMembersSuspend
 * @arg {TeamMembersDeactivateArg} arg - The request parameters.
 * @returns {Promise.<void, Error.<TeamMembersSuspendError>>}
 */
routes.teamMembersSuspend = function (arg) {
  return this.request('team/members/suspend', arg, 'team', 'api', 'rpc');
};

/**
 * Unsuspend a member from a team. Permission : Team member management Exactly
 * one of team_member_id, email, or external_id must be provided to identify the
 * user account.
 * @function DropboxTeam#teamMembersUnsuspend
 * @arg {TeamMembersUnsuspendArg} arg - The request parameters.
 * @returns {Promise.<void, Error.<TeamMembersUnsuspendError>>}
 */
routes.teamMembersUnsuspend = function (arg) {
  return this.request('team/members/unsuspend', arg, 'team', 'api', 'rpc');
};

/**
 * Returns a list of all team-accessible namespaces. This list includes team
 * folders, shared folders containing team members, team members' home
 * namespaces, and team members' app folders. Home namespaces and app folders
 * are always owned by this team or members of the team, but shared folders may
 * be owned by other users or other teams. Duplicates may occur in the list.
 * @function DropboxTeam#teamNamespacesList
 * @arg {TeamTeamNamespacesListArg} arg - The request parameters.
 * @returns {Promise.<TeamTeamNamespacesListResult, Error.<void>>}
 */
routes.teamNamespacesList = function (arg) {
  return this.request('team/namespaces/list', arg, 'team', 'api', 'rpc');
};

/**
 * Once a cursor has been retrieved from namespaces/list, use this to paginate
 * through all team-accessible namespaces. Duplicates may occur in the list.
 * @function DropboxTeam#teamNamespacesListContinue
 * @arg {TeamTeamNamespacesListContinueArg} arg - The request parameters.
 * @returns {Promise.<TeamTeamNamespacesListResult, Error.<TeamTeamNamespacesListContinueError>>}
 */
routes.teamNamespacesListContinue = function (arg) {
  return this.request('team/namespaces/list/continue', arg, 'team', 'api', 'rpc');
};

/**
 * Add a property template. See route files/properties/add to add properties to
 * a file.
 * @function DropboxTeam#teamPropertiesTemplateAdd
 * @arg {TeamAddPropertyTemplateArg} arg - The request parameters.
 * @returns {Promise.<TeamAddPropertyTemplateResult, Error.<PropertiesModifyPropertyTemplateError>>}
 */
routes.teamPropertiesTemplateAdd = function (arg) {
  return this.request('team/properties/template/add', arg, 'team', 'api', 'rpc');
};

/**
 * Get the schema for a specified template.
 * @function DropboxTeam#teamPropertiesTemplateGet
 * @arg {PropertiesGetPropertyTemplateArg} arg - The request parameters.
 * @returns {Promise.<PropertiesGetPropertyTemplateResult, Error.<PropertiesPropertyTemplateError>>}
 */
routes.teamPropertiesTemplateGet = function (arg) {
  return this.request('team/properties/template/get', arg, 'team', 'api', 'rpc');
};

/**
 * Get the property template identifiers for a team. To get the schema of each
 * template use properties/template/get.
 * @function DropboxTeam#teamPropertiesTemplateList
 * @arg {void} arg - The request parameters.
 * @returns {Promise.<PropertiesListPropertyTemplateIds, Error.<PropertiesPropertyTemplateError>>}
 */
routes.teamPropertiesTemplateList = function (arg) {
  return this.request('team/properties/template/list', arg, 'team', 'api', 'rpc');
};

/**
 * Update a property template. This route can update the template name, the
 * template description and add optional properties to templates.
 * @function DropboxTeam#teamPropertiesTemplateUpdate
 * @arg {TeamUpdatePropertyTemplateArg} arg - The request parameters.
 * @returns {Promise.<TeamUpdatePropertyTemplateResult, Error.<PropertiesModifyPropertyTemplateError>>}
 */
routes.teamPropertiesTemplateUpdate = function (arg) {
  return this.request('team/properties/template/update', arg, 'team', 'api', 'rpc');
};

/**
 * Retrieves reporting data about a team's user activity.
 * @function DropboxTeam#teamReportsGetActivity
 * @arg {TeamDateRange} arg - The request parameters.
 * @returns {Promise.<TeamGetActivityReport, Error.<TeamDateRangeError>>}
 */
routes.teamReportsGetActivity = function (arg) {
  return this.request('team/reports/get_activity', arg, 'team', 'api', 'rpc');
};

/**
 * Retrieves reporting data about a team's linked devices.
 * @function DropboxTeam#teamReportsGetDevices
 * @arg {TeamDateRange} arg - The request parameters.
 * @returns {Promise.<TeamGetDevicesReport, Error.<TeamDateRangeError>>}
 */
routes.teamReportsGetDevices = function (arg) {
  return this.request('team/reports/get_devices', arg, 'team', 'api', 'rpc');
};

/**
 * Retrieves reporting data about a team's membership.
 * @function DropboxTeam#teamReportsGetMembership
 * @arg {TeamDateRange} arg - The request parameters.
 * @returns {Promise.<TeamGetMembershipReport, Error.<TeamDateRangeError>>}
 */
routes.teamReportsGetMembership = function (arg) {
  return this.request('team/reports/get_membership', arg, 'team', 'api', 'rpc');
};

/**
 * Retrieves reporting data about a team's storage usage.
 * @function DropboxTeam#teamReportsGetStorage
 * @arg {TeamDateRange} arg - The request parameters.
 * @returns {Promise.<TeamGetStorageReport, Error.<TeamDateRangeError>>}
 */
routes.teamReportsGetStorage = function (arg) {
  return this.request('team/reports/get_storage', arg, 'team', 'api', 'rpc');
};

/**
 * Sets an archived team folder's status to active. Permission : Team member
 * file access.
 * @function DropboxTeam#teamTeamFolderActivate
 * @arg {TeamTeamFolderIdArg} arg - The request parameters.
 * @returns {Promise.<TeamTeamFolderMetadata, Error.<TeamTeamFolderActivateError>>}
 */
routes.teamTeamFolderActivate = function (arg) {
  return this.request('team/team_folder/activate', arg, 'team', 'api', 'rpc');
};

/**
 * Sets an active team folder's status to archived and removes all folder and
 * file members. Permission : Team member file access.
 * @function DropboxTeam#teamTeamFolderArchive
 * @arg {TeamTeamFolderArchiveArg} arg - The request parameters.
 * @returns {Promise.<TeamTeamFolderArchiveLaunch, Error.<TeamTeamFolderArchiveError>>}
 */
routes.teamTeamFolderArchive = function (arg) {
  return this.request('team/team_folder/archive', arg, 'team', 'api', 'rpc');
};

/**
 * Returns the status of an asynchronous job for archiving a team folder.
 * Permission : Team member file access.
 * @function DropboxTeam#teamTeamFolderArchiveCheck
 * @arg {AsyncPollArg} arg - The request parameters.
 * @returns {Promise.<TeamTeamFolderArchiveJobStatus, Error.<AsyncPollError>>}
 */
routes.teamTeamFolderArchiveCheck = function (arg) {
  return this.request('team/team_folder/archive/check', arg, 'team', 'api', 'rpc');
};

/**
 * Creates a new, active, team folder. Permission : Team member file access.
 * @function DropboxTeam#teamTeamFolderCreate
 * @arg {TeamTeamFolderCreateArg} arg - The request parameters.
 * @returns {Promise.<TeamTeamFolderMetadata, Error.<TeamTeamFolderCreateError>>}
 */
routes.teamTeamFolderCreate = function (arg) {
  return this.request('team/team_folder/create', arg, 'team', 'api', 'rpc');
};

/**
 * Retrieves metadata for team folders. Permission : Team member file access.
 * @function DropboxTeam#teamTeamFolderGetInfo
 * @arg {TeamTeamFolderIdListArg} arg - The request parameters.
 * @returns {Promise.<Array.<TeamTeamFolderGetInfoItem>, Error.<void>>}
 */
routes.teamTeamFolderGetInfo = function (arg) {
  return this.request('team/team_folder/get_info', arg, 'team', 'api', 'rpc');
};

/**
 * Lists all team folders. Permission : Team member file access.
 * @function DropboxTeam#teamTeamFolderList
 * @arg {TeamTeamFolderListArg} arg - The request parameters.
 * @returns {Promise.<TeamTeamFolderListResult, Error.<TeamTeamFolderListError>>}
 */
routes.teamTeamFolderList = function (arg) {
  return this.request('team/team_folder/list', arg, 'team', 'api', 'rpc');
};

/**
 * Once a cursor has been retrieved from team_folder/list, use this to paginate
 * through all team folders. Permission : Team member file access.
 * @function DropboxTeam#teamTeamFolderListContinue
 * @arg {TeamTeamFolderListContinueArg} arg - The request parameters.
 * @returns {Promise.<TeamTeamFolderListResult, Error.<TeamTeamFolderListContinueError>>}
 */
routes.teamTeamFolderListContinue = function (arg) {
  return this.request('team/team_folder/list/continue', arg, 'team', 'api', 'rpc');
};

/**
 * Permanently deletes an archived team folder. Permission : Team member file
 * access.
 * @function DropboxTeam#teamTeamFolderPermanentlyDelete
 * @arg {TeamTeamFolderIdArg} arg - The request parameters.
 * @returns {Promise.<void, Error.<TeamTeamFolderPermanentlyDeleteError>>}
 */
routes.teamTeamFolderPermanentlyDelete = function (arg) {
  return this.request('team/team_folder/permanently_delete', arg, 'team', 'api', 'rpc');
};

/**
 * Changes an active team folder's name. Permission : Team member file access.
 * @function DropboxTeam#teamTeamFolderRename
 * @arg {TeamTeamFolderRenameArg} arg - The request parameters.
 * @returns {Promise.<TeamTeamFolderMetadata, Error.<TeamTeamFolderRenameError>>}
 */
routes.teamTeamFolderRename = function (arg) {
  return this.request('team/team_folder/rename', arg, 'team', 'api', 'rpc');
};

/**
 * Returns the member profile of the admin who generated the team access token
 * used to make the call.
 * @function DropboxTeam#teamTokenGetAuthenticatedAdmin
 * @arg {void} arg - The request parameters.
 * @returns {Promise.<TeamTokenGetAuthenticatedAdminResult, Error.<TeamTokenGetAuthenticatedAdminError>>}
 */
routes.teamTokenGetAuthenticatedAdmin = function (arg) {
  return this.request('team/token/get_authenticated_admin', arg, 'team', 'api', 'rpc');
};

module.exports = routes;
