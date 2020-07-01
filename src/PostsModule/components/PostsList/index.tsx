import React, { Component } from 'react'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
import { withTranslation, WithTranslation } from 'react-i18next'

import InputComponent from '../../../common/components/InputComponent'
import { ValidateUserName } from '../../../common/utils/validationUtils'
import i18n from '../../../i18n'
import NoDataView from '../common/NoDataView'
import PostModel from '../../stores/models/PostModel'
import Post from '../Post'

import {
  PostsListWrapper,
  PostsHeading,
  PostsLeft,
  LanguageButton,
  ButtonWrapper
} from './styledComponents'

interface TodoListProps extends WithTranslation {
  posts: Array<PostModel>
}

@observer
class PostsList extends Component<TodoListProps> {
  @observable text = 'raja'
  onChangeLanguage = value => {
    i18n.changeLanguage(value)
  }

  onChangeUserName = e => {
    this.text = e.target.value
  }

  render() {
    const { posts, t } = this.props

    if (posts.length === 0) {
      return <NoDataView />
    }
    return (
      <PostsListWrapper>
        <PostsHeading>{t('posts:title')}</PostsHeading>
        <PostsLeft>
          {t('posts:postsCountParameter', { count: posts.length })}
        </PostsLeft>
        <InputComponent
          text={this.text}
          validateUserName={ValidateUserName}
          onChangeFunction={this.onChangeUserName}
        />
        <ButtonWrapper>
          <LanguageButton
            onClick={() => {
              this.onChangeLanguage('en')
            }}
          >
            {t('posts:language')}
          </LanguageButton>
          <LanguageButton
            onClick={() => {
              this.onChangeLanguage('te')
            }}
          >
            {t('posts:language')}
          </LanguageButton>
          <LanguageButton
            onClick={() => {
              this.onChangeLanguage('ml')
            }}
          >
            {t('posts:language')}
          </LanguageButton>
        </ButtonWrapper>
        {posts.map(postItem => {
          return <Post key={postItem.id} post={postItem} />
        })}
      </PostsListWrapper>
    )
  }
}

export default withTranslation()(PostsList)
