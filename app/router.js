import EmberRouter from '@ember/routing/router';
import config from 'ares-webportal/config/environment';
import setupCustomRoutes from 'ares-webportal/custom-routes';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
    
 init() {
      super.init();
      this.on('routeDidChange', function() {
        window.scrollTo(0, 0);
      });
    }
}

Router.map(function() {
  this.route('home', { path: ''});
  
  this.route('account');
  this.route('achievements');
  this.route('admins');
  this.route('app-review', { path: '/app/:id' });
  this.route('area', { path: '/area/:id'});
  this.route('area-edit', { path: '/area/:id/edit'});
  this.route('area-create', { path: '/area/create'});
  this.route('banned');
  this.route('blocks');
  this.route('census');
  this.route('census-group', { path: '/census/:filter' });
  this.route('characters', { path: '/chars'});
  this.route('char', { path: '/char/:id' });
  this.route('char-edit', { path: '/char/:id/edit' });
  this.route('char-source', { path: '/char/:char_id/source/:version_id' });
  this.route('chargen');
  this.route('chargen-char', { path: '/chargen/:char_id'});
  this.route('chargen-review', { path: '/chargen-review/:char_id'});
  this.route('chat');
  this.route('channels-manage');
  this.route('channel-create');
  this.route('channel-edit', { path: '/channel-edit/:id' });
  this.route('combat', { path: '/combat/:id' });
  this.route('combat-log', { path: '/combat/:id/log' });
  this.route('combat-teams', { path: '/combat/:id/teams' });
  this.route('combat-setup', { path: '/combat/:id/setup' });
  this.route('combatant-edit', { path: '/combatant/:id' });
  this.route('combats');
  this.route('config', { path: '/config/:file' });
  this.route('custom-code');
  this.route('emoji');
  this.route('error');
  this.route('events');
  this.route('event', { path: '/event/:event_id'} );
  this.route('event-edit', { path: '/event/:event_id/edit'} );
  this.route('event-create', { path: '/event/create' } );
  this.route('files');
  this.route('folder', { path: '/file/:folder' });
  this.route('file', { path: '/file/:folder/:name' });
  this.route('file-edit', { path: '/file/edit/:folder/:name' });
  this.route('forum');
  this.route('forum-category', { path: '/forum/:category_id'});
  this.route('forum-topic', { path: '/forum/:category_id/:topic_id'});
  this.route('forum-create-post', { path: '/forum/:category_id/create-post' });
  this.route('forum-create');
  this.route('forum-edit', { path: '/forum-edit/:id' });
  this.route('forum-manage');
  this.route('fs3-limits');
  this.route('fs3-xp-costs');
  this.route('fs3combat-gear', { path: '/fs3combat/gear/' });
  this.route('fs3combat-gear-detail', { path: '/fs3combat/gear/:type/:name' });
  this.route('fs3skills-abilities', { path: '/fs3skills/abilities' });
  this.route('fs3skills-scan', { path: '/fs3skills/scan' });
  this.route('game-edit');
  this.route('groups');
  this.route('help');
  this.route('help-topic', { path: '/help/:topic' });
  this.route('help-override', { path: '/help/:topic/override' });
  this.route('idle');
  this.route('jobs');
  this.route('job', { path: '/job/:id' });
  this.route('job-create');
  this.route('job-edit', { path: '/job/:id/edit' });
  this.route('jobcat-create');
  this.route('jobcat-edit', { path: '/jobcat-edit/:id' });
  this.route('jobcat-manage');
  this.route('locations');
  this.route('location', { path: '/location/:id'});
  this.route('location-create', { path: '/location/create'});
  this.route('location-edit', { path: '/location/:id/edit'});
  this.route('logs');
  this.route('log', { path: '/log/:file' });
  this.route('login', { query_params: ['redirect'] });
  this.route('logout');
  this.route('mail');
  this.route('mail-message', { path: '/mail/:id'});
  this.route('mail-send');
  this.route('manage');
  this.route('motd-edit', { path: '/motd/edit' });
  this.route('notes', { path: '/char/:id/notes' });
  this.route('notes-edit', { path: '/char/:id/notes/edit' });
  this.route('notifications');
  this.route('play');
  this.route('players');
  this.route('player', { path: '/player/:id'});
  this.route('plots');
  this.route('plots-archive', {path: '/plots/archive'});
  this.route('plot', { path: '/plot/:id' });
  this.route('plot-edit', { path: '/plot/:id/edit' });
  this.route('plot-create', { path: '/plot/create' });
  this.route('plugins-edit');
  this.route('prefs');
  this.route('recent-changes');
  this.route('register');
  this.route('roles');
  this.route('roster');
  this.route('roster-claim', { path: '/roster/claim/:id' });
  this.route('routes');
  this.route('scenes');
  this.route('scenes-live');
  this.route('scenes-play');
  this.route('scenes-unshared');
  this.route('scene', { path: '/scene/:id' } );
  this.route('scene-live', { path: '/scene-live/:id' });
  this.route('scene-edit', { path: '/scene/:id/edit' } );
  this.route('scene-download', { path: '/scene/:id/download' } );
  this.route('scene-create', { path: '/scene/create', query_params: ['location'] } );
  this.route('scene-source', { path: '/scene/:scene_id/source/:version_id'});
  this.route('search-locations');
  this.route('search-scenes');
  this.route('search-jobs');
  this.route('search-wiki');
  this.route('search-chars');
  this.route('search-help');
  this.route('search-forum');
  this.route('server-info');
  this.route('setup');
  this.route('setup-colors');
  this.route('shutdown');
  this.route('textfile', { path: '/textfile/:file_type/:file' });
  this.route('tinker');
  this.route('tos');
  this.route('tour');
  this.route('who');
  this.route('wiki');
  this.route('wiki-archive');
  this.route('wiki-page', { path: '/wiki/:id'});
  this.route('wiki-all', { path: '/wiki/all'});
  this.route('wiki-create', { path: '/wiki/create', query_params: ['title', 'category', 'template', 'tags']});
  this.route('wiki-edit', { path: '/wiki/:id/edit'});
  this.route('wiki-source', { path: '/wiki/:page_id/source/:version_id'});
  this.route('wiki-tag', { path: '/wiki/tag/:id'});
  this.route('wiki-tags', { path: '/wiki/tags'});

  setupCustomRoutes(this);

  // !!!!!!!!!!!!!!!!!!!!!!!!
  // This must be at the end
  // !!!!!!!!!!!!!!!!!!!!!!!!

  this.route('not-found', { path: '*:' });
});