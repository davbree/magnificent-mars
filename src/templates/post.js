import React from 'react';
import _ from 'lodash';
import moment from 'moment-strftime';

import {Layout} from '../components/index';
import {htmlToReact, safePrefix} from '../utils';

export default class Post extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
            <div className="outer">
              <div className="inner">
                <article className="post post-full">
                  <header className="post-header inner-small">
                    <h1 className="post-title line-top">{this.props.pageContext.frontmatter.title}</h1>
                    <div className="post-meta">
                      <time className="published"
                        datetime={moment(_.get(this.props, 'pageContext.frontmatter.date')).strftime('%Y-%m-%d %H:%M')}>{moment(_.get(this.props, 'pageContext.frontmatter.date')).strftime('%B %d, %Y')}</time>
                    </div>
                    {this.props.pageContext.frontmatter.subtitle && 
                    <div className="post-subtitle">
                      {htmlToReact(this.props.pageContext.frontmatter.subtitle)}
                    </div>
                    }
                  </header>
                  {this.props.pageContext.frontmatter.content_img_path && 
                  <div className="post-thumbnail">
                    <img src={safePrefix(this.props.pageContext.frontmatter.content_img_path)} alt={this.props.pageContext.frontmatter.title} />
                  </div>
                  }
                  <div className="post-content inner-small">
                    {htmlToReact(_.get(this.props, 'pageContext.html'))}
                  </div>
                </article>
              </div>
            </div>
            </Layout>
        );
    }
}
